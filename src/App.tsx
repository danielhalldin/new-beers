import React from "react";
import { ApolloProvider } from "react-apollo";
import apolloClient from "./lib/apolloClient";
import cookies from "js-cookie";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import routes from "./lib/routes";
import Header from "./components/Header";
import Login from "./components/Login";
import NotFriend from "./components/NotFriend";
import Navigation from "./components/Navigation";
import { Route as RouteType } from "./types/Route";
import { useQuery } from "@apollo/react-hooks";
import { untappdUser } from "queries";

const App = () => {
  const untappdAccessToken = cookies.get("untappd_access_token") || "";

  const PrivateRoute = ({
    key,
    path,
    component,
  }: {
    key: any;
    path: any;
    component: any;
  }) => {
    const { loading, error, data } = useQuery(untappdUser);
    if (!untappdAccessToken) {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");
      if (!token) {
        return <Redirect to="/notLoggedIn" />;
      } else {
        cookies.set("untappd_access_token", token, { expires: 30 });
        window.location.href = "/";
      }
    }
    if (error) {
      return null;
    }
    if (loading) {
      return null;
    }

    console.log({ untappdIsFriend: data.untappdIsFriend });
    if (data && data.untappdIsFriend !== true) {
      return <Redirect to="/notFriend" />;
    }

    console.log({ untappdAccessToken });
    return <Route key={key} path={path} render={() => component} />;
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/notFriend" exact render={() => <NotFriend />} />
        <Route path="/notLoggedIn" exact render={() => <Login />} />
        <Route>
          <ApolloProvider client={apolloClient(untappdAccessToken)}>
            <Header />
            <Switch>
              {routes
                .filter(
                  (route: RouteType) =>
                    route.path !== undefined && !route.submenu
                )
                .map((route: RouteType) => (
                  <PrivateRoute
                    key={route.path}
                    path={route.path}
                    component={route.component}
                  />
                ))}
              <PrivateRoute
                key="root"
                path="/"
                component={<Redirect to="/rekommenderade" />}
              />
            </Switch>
            <Navigation />
          </ApolloProvider>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

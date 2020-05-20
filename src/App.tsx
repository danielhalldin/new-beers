import React, { useState } from "react";
import { ApolloProvider } from "react-apollo";
import apolloClient from "./lib/apolloClient";
import cookies from "js-cookie";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import routes from "./lib/routes";
import Header from "./components/Header";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import { Route as RouteType } from "./types/Route";

const App = () => {
  const [untappdAccessToken, setUntappdAccessToken] = useState(
    cookies.get("untappd_access_token") || ""
  );
  if (!untappdAccessToken) {
    // Not logged in
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (!token) {
      // Haven't got token parameter
      return <Login />;
    } else {
      // Has got token parameter
      cookies.set("untappd_access_token", token, { expires: 30 });
      window.location.href = "/";
      setUntappdAccessToken(token);
    }
  }

  return (
    <BrowserRouter>
      <ApolloProvider client={apolloClient(untappdAccessToken)}>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Redirect to="/rekommenderade" />}
          />
          {routes
            .filter(
              (route: RouteType) => route.path !== undefined && !route.submenu
            )
            .map((route: RouteType) => (
              <Route
                key={route.path}
                path={route.path}
                render={() => (
                  <Route
                    key={route.path + "-route"}
                    path={route.path}
                    render={() => route.component}
                  />
                )}
              />
            ))}
        </Switch>

        <Navigation />
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default App;

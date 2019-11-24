import React from "react";
import { ApolloProvider } from "react-apollo";
import apolloClient from "./lib/apolloClient";
import cookies from "js-cookie";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import routes from "./lib/routes";
import Beers from "./components/Beers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { Layout } from "./components/Layout.styles";

const App = () => {
  const untappd_access_token = cookies.get("untappd_access_token");
  if (!untappd_access_token) {
    // Not logged in
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (!token) {
      // Haven't got token parameter
      return (
        <div style={{ textAlign: "center" }}>
          <Header login />
          <Login href={`${process.env.REACT_APP_LOGIN_URL}`} />
        </div>
      );
    } else {
      // Has got token parameter
      cookies.set("untappd_access_token", token, { expires: 30 });
      window.location.href = "/";
      return;
    }
  }

  return (
    <BrowserRouter>
      <ApolloProvider client={apolloClient(untappd_access_token)}>
        <Layout>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={() => <Beers stockType="Rekommenderade" />}
            />
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                render={() => route.component}
              />
            ))}
          </Switch>
          <Footer />
        </Layout>
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default App;

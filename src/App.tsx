import React, { useState } from "react";
import { ApolloProvider } from "react-apollo";
import apolloClient from "./lib/apolloClient";
import cookies from "js-cookie";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import routes from "./lib/routes";
import { recommemded } from "./queries";
import Header from "./components/Header";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import { Layout } from "./components/Layout.styles";
import Footer from "components/Footer";

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

  // Prefetch all queries
  const client = apolloClient(untappdAccessToken);
  routes
    .filter((route) => !!route.query)
    .map((route) => {
      const query = route.query || recommemded;
      const variables = route?.queryVariables || {};
      return client.query({
        query,
        variables,
      });
    });

  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Redirect to="/rekommenderade" />}
          />
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              render={() => (
                <>
                  <Layout>
                    <Route
                      key={route.path + "-route"}
                      path={route.path}
                      render={() => route.component}
                    />
                    <Footer key={route.path + "-footer"} />
                  </Layout>
                </>
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

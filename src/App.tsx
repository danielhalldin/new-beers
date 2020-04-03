import React, { useState } from "react";
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

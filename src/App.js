import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import appoloClient from "./lib/apolloClient";
import cookies from "js-cookie";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import routes from "./lib/routes";

import Beers from "./components/Beers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";

class App extends Component {
  render() {
    const untappd_access_token = cookies.get("untappd_access_token");
    if (!untappd_access_token) {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");

      if (!token) {
        return (
          <div style={{ textAlign: "center" }}>
            <Header login />
            <Login href={`${process.env.REACT_APP_LOGIN_URL}`} />
          </div>
        );
      } else {
        cookies.set("untappd_access_token", token);
        window.location.href = "/";
        return;
      }
    }

    return (
      <BrowserRouter>
        <ApolloProvider client={appoloClient(untappd_access_token)}>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={() => <Beers stockType="Små partier" />}
            />
            {routes.map(route => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  render={() => <Beers stockType={route.id} />}
                />
              );
            })}
          </Switch>
          <Footer />
        </ApolloProvider>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { Query } from "react-apollo";
import appoloClient from "./lib/apolloClient";
import cookies from "js-cookie";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { untappdUser } from "./queries";

import Beers from "./components/Beers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { Loader } from "./components/Beers.styles";
import routes from "./lib/routes";
class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const untappd_access_token = cookies.get("untappd_access_token");

    if (token && !untappd_access_token) {
      cookies.set("untappd_access_token", token);
      window.location.href = "/";
    }

    if (!untappd_access_token) {
      return (
        <div style={{ textAlign: "center" }}>
          <Header login />
          <Login href={`${process.env.REACT_APP_LOGIN_URL}`} />
        </div>
      );
    }

    return (
      <BrowserRouter>
        <ApolloProvider client={appoloClient(untappd_access_token)}>
          <Query query={untappdUser}>
            {({ loading, error, data }) => {
              if (loading)
                return (
                  <Loader>
                    <span role="img" aria-label="Beer">
                      🍺
                    </span>{" "}
                    Laddar...
                  </Loader>
                );
              if (error) return <Loader>Error :(</Loader>;
              return (
                <React.Fragment>
                  <Header
                    user={data.untappdUser}
                    isFriend={data.untappdIsFriend}
                  />
                </React.Fragment>
              );
            }}
          </Query>
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

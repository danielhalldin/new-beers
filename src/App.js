import React, { Component } from "react";
import cookies from "js-cookie";
import Beers from "./components/Beers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";

import { ApolloProvider } from "react-apollo";
import { Query } from "react-apollo";
import appoloClient from "./lib/apolloClient";
import { decoratedLatest } from "./queries";
import { Loader } from "./components/Beers.styles";

class App extends Component {
  render() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const untappd_access_token = cookies.get("untappd_access_token");

    if (token && !untappd_access_token) {
      cookies.set("untappd_access_token", token, { expires: 30 });
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
      <ApolloProvider client={appoloClient(untappd_access_token)}>
        <Query query={decoratedLatest}>
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
              <div>
                <Header user={data.untappdUser} />
                <Beers beers={data.decoratedLatest} />
                <Footer />
              </div>
            );
          }}
        </Query>
      </ApolloProvider>
    );
  }
}

export default App;

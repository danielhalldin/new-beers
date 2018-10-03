import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { Query } from "react-apollo";
import cookies from "js-cookie";
import appoloClient from "./lib/apolloClient";
import { decoratedLatest } from "./queries";
import Card from "./Card";
import { Container, Loader } from "./Beers.styles";

class Beers extends Component {
  render() {
    const untappd_access_token = cookies.get("untappd_access_token");
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
            const beers = data.decoratedLatest.map(data => {
              data.rotate =
                Math.random() < 0.5 ? -3 * Math.random() : 3 * Math.random();
              return (
                <div key={data.id}>
                  <Card data={data} />
                </div>
              );
            });

            return <BeersContainer>{beers}</BeersContainer>;
          }}
        </Query>
      </ApolloProvider>
    );
  }
}

export default Beers;

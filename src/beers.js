import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { Query } from "react-apollo";
import cookies from "js-cookie";
import appoloClient from "./lib/apolloClient";
import { decoratedLatest } from "./queries";
import Card from "./card";

class Beers extends Component {
  render() {
    const untappd_access_token = cookies.get("untappd_access_token");
    return (
      <ApolloProvider client={appoloClient(untappd_access_token)}>
        <Query query={decoratedLatest}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            const beers = data.decoratedLatest.map(data => {
              data.rotate =
                Math.random() < 0.5 ? -2 * Math.random() : 2 * Math.random();
              return (
                <div key={data.id}>
                  <Card data={data} />
                </div>
              );
            });

            return (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center"
                }}
              >
                {beers}
              </div>
            );
          }}
        </Query>
      </ApolloProvider>
    );
  }
}

export default Beers;

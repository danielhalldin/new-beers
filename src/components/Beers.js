import React, { Component } from "react";
import Card from "./Card";
import { BeersContainer, Loader, Header, Button } from "./Beers.styles";
import { decoratedLatest } from "../queries";
import { Query } from "react-apollo";

class Beers extends Component {
  state = {
    stockTypes: [
      "Små partier",
      "Lokalt och småskaligt",
      "Övrigt sortiment",
      "Ordinarie sortiment"
    ]
  };

  changeStock = e => {
    e.preventDefault();
    const stockTypes = this.state.stockTypes;
    if (e.target.value) {
      stockTypes.push(stockTypes.shift());
    } else {
      stockTypes.unshift(stockTypes.pop());
    }
    this.setState({ stockTypes });
  };

  render() {
    return (
      <React.Fragment>
        <Header>
          <Button value={false} onClick={this.changeStock}>
            {"<<"}
          </Button>
          {this.state.stockTypes[0]}
          <Button value={true} onClick={this.changeStock}>
            {">>"}
          </Button>
        </Header>
        <Query
          query={decoratedLatest}
          variables={{ stockType: this.state.stockTypes[0] }}
        >
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
            const beers = data.decoratedLatest.beers.map(beer => {
              return (
                <Card
                  rotate={Math.round(
                    Math.random() < 0.5 ? -3 * Math.random() : 3 * Math.random()
                  )}
                  key={`${beer.systembolagetId}-${Math.random()}`}
                  data={beer}
                />
              );
            });
            return (
              <React.Fragment>
                <BeersContainer>{beers}</BeersContainer>
              </React.Fragment>
            );
          }}
        </Query>
      </React.Fragment>
    );
  }
}

export default Beers;

import React, { Component } from "react";
import Card from "./Card";
import Menu, { currentIndex } from "./Menu";
import { BeersContainer, Loader } from "./Beers.styles";
import { Query } from "react-apollo";
import routes from "../lib/routes";
import _get from "lodash/get";

class Stock extends Component {
  render() {
    const stockType = this.props.stockType;
    const query = routes[currentIndex(stockType)].query;
    const variables = stockType !== "Checkins" ? { stockType: stockType } : {};

    return (
      <Query query={query} variables={variables}>
        {({ loading, error, data, client }) => {
          if (loading)
            return (
              <Loader>
                <span className="beer" role="img" aria-label="Beer">
                  🍺
                </span>
                Laddar...
              </Loader>
            );
          if (error) return <Loader>Error :(</Loader>;

          const admin = _get(data, `untappdUser.admin`) || false;
          const beerData =
            _get(data, `decoratedLatest.beers`) ||
            _get(data, `untappdUserBeers`) ||
            [];
          const beers = beerData.map(beer => {
            return (
              <Card
                rotate={Math.round(
                  Math.random() < 0.5 ? -3 * Math.random() : 3 * Math.random()
                )}
                key={`${beer.systembolagetId}-${Math.random()}`}
                data={beer}
                admin={admin}
              />
            );
          });

          return (
            <>
              <BeersContainer>{beers}</BeersContainer>
            </>
          );
        }}
      </Query>
    );
  }
}

class Beers extends Component {
  render() {
    const stockType = this.props.stockType;

    return (
      <>
        <Menu stockType={stockType} />
        <Stock stockType={stockType} />
      </>
    );
  }
}

export default Beers;

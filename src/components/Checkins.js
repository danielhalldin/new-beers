import React, { Component } from "react";
import Card from "./Card";
import { BeersContainer, Loader, Menu, Button } from "./Beers.styles";
import { untappdUser } from "../queries";
import { Query } from "react-apollo";

import routes from "../lib/routes";

const Stock = stockType => (
  <Query query={untappdUser}>
    {({ loading, error, data }) => {
      if (loading)
        return (
          <Loader>
            <span className="beer" role="img" aria-label="Beer">
              🍺
            </span>{" "}
            Laddar...
          </Loader>
        );
      if (error) return <Loader>Error :(</Loader>;
      const beers = data.untappdUser.checkins.map(beer => {
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
      return <BeersContainer>{beers}</BeersContainer>;
    }}
  </Query>
);

class Beers extends Component {
  render() {
    const stockType = this.props.stockType;
    const stockTypeIndex = routes.findIndex(
      route => route.id === this.props.stockType
    );
    const prevStockTypeIndex =
      stockTypeIndex === 0 ? routes.length - 1 : stockTypeIndex - 1;
    const nextStockTypeIndex =
      stockTypeIndex === routes.length - 1 ? 0 : stockTypeIndex + 1;

    return (
      <>
        <Menu>
          <Button to={routes[prevStockTypeIndex].path}>{"<<"}</Button>
          {stockType}
          <Button to={routes[nextStockTypeIndex].path}>{">>"}</Button>
        </Menu>
        <Stock stockType={stockType} />
      </>
    );
  }
}

export default Beers;

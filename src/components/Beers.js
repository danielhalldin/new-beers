import React, { Component } from "react";
import Card from "./Card";
import { BeersContainer, Loader, Menu, Button } from "./Beers.styles";
import { decoratedLatest } from "../queries";
import { Query } from "react-apollo";

import routes from "../lib/routes";

const Stock = stockType => (
  <Query query={decoratedLatest} variables={stockType}>
    {({ loading, error, data }) => {
      if (loading)
        return (
          <Loader>
            <div className="beer" role="img" aria-label="Beer">
              🍺
            </div>{" "}
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
      <React.Fragment>
        <Menu>
          <Button to={routes[prevStockTypeIndex].path}>{"<<"}</Button>
          {stockType}
          <Button to={routes[nextStockTypeIndex].path}>{">>"}</Button>
        </Menu>
        <Stock stockType={stockType} />
      </React.Fragment>
    );
  }
}

export default Beers;

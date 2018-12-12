import React, { Component } from "react";
import { ApolloConsumer } from "react-apollo";
import routes from "../lib/routes";
import { Menu, Button } from "./Beers.styles";

export const currentIndex = stockType => {
  return routes.findIndex(route => route.id === stockType);
};

class MenuComponent extends Component {
  previousIndex = stockType => {
    const _currentIndex = currentIndex(stockType);
    return _currentIndex === 0 ? routes.length - 1 : _currentIndex - 1;
  };

  nextIndex = stockType => {
    const _currentIndex = currentIndex(stockType);
    return _currentIndex === routes.length - 1 ? 0 : _currentIndex + 1;
  };

  preloadNeighbours = (client, stockType) => {
    console.log("prev", routes[this.previousIndex(stockType)].id);
    console.log("next", routes[this.nextIndex(stockType)].id);

    client.query({
      query: routes[this.previousIndex(stockType)].query,
      variables: { stockType: routes[this.previousIndex(stockType)].id }
    });
    client.query({
      query: routes[this.nextIndex(stockType)].query,
      variables: { stockType: routes[this.nextIndex(stockType)].id }
    });
  };

  render() {
    const { stockType } = this.props;

    return (
      <ApolloConsumer>
        {client => {
          this.preloadNeighbours(client, stockType);
          return (
            <Menu>
              <Button to={routes[this.previousIndex(stockType)].path}>
                {"<<"}
              </Button>
              {stockType}
              <Button to={routes[this.nextIndex(stockType)].path}>
                {">>"}
              </Button>
            </Menu>
          );
        }}
      </ApolloConsumer>
    );
  }
}

export default MenuComponent;

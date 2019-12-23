import React from "react";
import routes from "../lib/routes";
import { Menu, Button } from "./Beers.styles";

export const currentIndex = stockType => {
  return routes.findIndex(route => route.id === stockType);
};

const MenuComponent = ({ stockType }) => {
  const previousIndex = stockType => {
    const _currentIndex = currentIndex(stockType);
    return _currentIndex === 0 ? routes.length - 1 : _currentIndex - 1;
  };

  const nextIndex = stockType => {
    const _currentIndex = currentIndex(stockType);
    return _currentIndex === routes.length - 1 ? 0 : _currentIndex + 1;
  };

  const preloadNeighbours = (client, stockType) => {
    client.query({
      query: routes[previousIndex(stockType)].query,
      variables: { stockType: routes[previousIndex(stockType)].id }
    });
    client.query({
      query: routes[nextIndex(stockType)].query,
      variables: { stockType: routes[nextIndex(stockType)].id }
    });
  };

  return (
    <Menu>
      <Button to={routes[previousIndex(stockType)].path}>{"«"}</Button>
      {stockType}
      <Button to={routes[nextIndex(stockType)].path}>{"»"}</Button>
    </Menu>
  );
};

export default MenuComponent;

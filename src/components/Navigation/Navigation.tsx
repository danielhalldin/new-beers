import React from "react";
import { ApolloConsumer } from "react-apollo";
import routes from "../../lib/routes";
import { Navigation, Button } from "./styles";

export const currentIndex = (path: string) => {
  return routes.findIndex((route) => route.path === path);
};

const MenuComponent = ({ path }: { path: string }) => {
  const previousIndex = (path: string) => {
    const _currentIndex = currentIndex(path);
    return _currentIndex === 0 ? routes.length - 1 : _currentIndex - 1;
  };

  const nextIndex = (path: string) => {
    const _currentIndex = currentIndex(path);
    return _currentIndex === routes.length - 1 ? 0 : _currentIndex + 1;
  };

  const preloadNeighbours = (client: any, path: string) => {
    client.query({
      query: routes[previousIndex(path)].query,
      variables: { stockType: routes[previousIndex(path)].id },
    });
    client.query({
      query: routes[nextIndex(path)].query,
      variables: { stockType: routes[nextIndex(path)].id },
    });
  };

  return (
    <ApolloConsumer>
      {(client) => {
        preloadNeighbours(client, path);
        return (
          <Navigation>
            <Button to={routes[previousIndex(path)].path}>{"«"}</Button>
            <h2>{routes[currentIndex(path)].id}</h2>
            <Button to={routes[nextIndex(path)].path}>{"»"}</Button>
          </Navigation>
        );
      }}
    </ApolloConsumer>
  );
};

export default MenuComponent;

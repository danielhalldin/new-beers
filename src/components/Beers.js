import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Card from "./Card";
import Menu, { currentIndex } from "./Menu";
import { BeersContainer, Loader } from "./Beers.styles";
import routes from "../lib/routes";
import _get from "lodash/get";

const Stock = ({ stockType }) => {
  const query = routes[currentIndex(stockType)].query;
  const variables =
    stockType !== "Checkins" && stockType !== "Rekommenderade"
      ? { stockType: stockType }
      : {};

  const { loading, error, data } = useQuery(query, {
    variables,
    fetchPolicy: "network-only"
  });
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
    _get(data, `recommended.beers`) ||
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
};

const Beers = ({ stockType }) => {
  return (
    <>
      <Menu stockType={stockType} />
      <Stock stockType={stockType} />
    </>
  );
};

export default Beers;

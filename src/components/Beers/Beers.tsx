import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import Card from "../Card";
import { currentIndex } from "../Navigation";
import { BeersContainer, Loader } from "./styles";
import routes from "../../lib/routes";
import _get from "lodash/get";

import { Beer as BeerType } from "../../types/Beer";

const Beers: FunctionComponent<{ path: string }> = ({ path }) => {
  const query = routes[currentIndex(path)].query;
  const stockType = routes[currentIndex(path)].id;
  const variables =
    stockType !== "Checkins" && stockType !== "Rekommenderade"
      ? { stockType: stockType }
      : {};
  const { loading, error, data } = useQuery(query, {
    variables,
  });

  if (loading) {
    return (
      <Loader>
        <span className="beer" role="img" aria-label="Beer">
          🍺
        </span>
        Laddar...
      </Loader>
    );
  }

  if (error) {
    return (
      <Loader>
        <span className="error" role="img" aria-label="Error">
          👎🏻
        </span>
        Något gick fel
      </Loader>
    );
  }

  const admin = _get(data, `untappdUser.admin`) || false;
  const beerData =
    _get(data, `decoratedLatest.beers`) ||
    _get(data, `untappdUserBeers`) ||
    _get(data, `recommended.beers`) ||
    [];

  const beers = beerData.map((beer: BeerType) => {
    const rotation = Math.round(
      Math.random() < 0.5 ? -3 * Math.random() : 3 * Math.random()
    );
    const key = `${beer.systembolagetId}-${Math.random()}`;

    return <Card rotate={rotation} key={key} data={beer} admin={admin} />;
  });

  return <BeersContainer id={"main"}>{beers}</BeersContainer>;
};

export default Beers;

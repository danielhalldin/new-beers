import React, { FunctionComponent, useEffect } from "react";
import { useTitle } from "react-use";
import { useQuery } from "@apollo/react-hooks";
import _get from "lodash/get";
import { useLocation } from "react-router-dom";
import queryForPage from "lib/queryForPage";
import List from "./List";
import { Header, PageContainer, Loader } from "./styles";

const Page: FunctionComponent<{ name: string }> = ({ name }) => {
  const { query, variables } = queryForPage(name);
  const { loading, error, data } = useQuery(query, {
    variables,
  });
  const location = useLocation();
  useEffect(() => {}, [location]);

  useTitle(`New beers 🍺${name ? ` - ${name}` : ""}`);
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
    _get(data, `systembolagetSearch`) ||
    [];

  return (
    <PageContainer>
      <Header>{name}</Header>
      <List data={beerData} admin={admin} />
    </PageContainer>
  );
};

export default Page;

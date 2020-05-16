import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { recommemded } from "queries";
import { Header, PageContainer, ListContainer, Loader } from "./styles";
import routes from "lib/routes";
import _get from "lodash/get";
import { Route as RouteType } from "types/Route";
import { useTitle } from "react-use";
import List from "./List";

const Page: FunctionComponent<{ path: string }> = ({ path }) => {
  const currentRoute = routes.find((route: RouteType) => route.path === path);
  const query = currentRoute?.query || recommemded;
  const variables = currentRoute?.queryVariables;
  const { loading, error, data } = useQuery(query, {
    variables,
  });

  useTitle(`New beers 🍺${currentRoute?.id ? ` - ${currentRoute?.id}` : ""}`);
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
      <Header>{currentRoute?.id}</Header>
      <ListContainer id={"main"}>
        <List data={beerData} admin={admin} />
      </ListContainer>
    </PageContainer>
  );
};

export default Page;

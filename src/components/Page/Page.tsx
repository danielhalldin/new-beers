import React, { FunctionComponent, useEffect } from "react";
import { useTitle } from "react-use";
import { useQuery } from "@apollo/react-hooks";
import _get from "lodash/get";
import { useLocation } from "react-router-dom";
import queryForPage from "lib/queryForPage";
import List from "./List";
import Footer from "./Footer";
import { Header, PageContainer, Message } from "./styles";

const Page: FunctionComponent<{ name: string }> = ({ name }) => {
  const { query, variables } = queryForPage(name);
  const { loading, error, data } = useQuery(query, {
    variables,
  });
  const location = useLocation();
  useTitle(`New beers 🍺${name ? ` - ${name}` : ""}`);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  if (loading) {
    return (
      <Message>
        <span role="img" aria-label="Beer">
          🍺
        </span>
        Laddar...
      </Message>
    );
  }

  if (error) {
    return (
      <Message>
        <span role="img" aria-label="Error">
          👎🏻
        </span>
        Något gick fel
      </Message>
    );
  }

  const admin = _get(data, `untappdUser.admin`) || false;
  const beerData =
    _get(data, `decoratedLatest.beers`) ||
    _get(data, `untappdUserBeers`) ||
    _get(data, `recommended.beers`) ||
    _get(data, `systembolagetSearch`) ||
    [];

  if (!(beerData.length > 0)) {
    return (
      <Message>
        <span role="img" aria-label="NoMatch">
          😬
        </span>
        Hittade tyvärr inga 🍺
      </Message>
    );
  }

  return (
    <PageContainer id={"main"}>
      <Header>{name}</Header>
      <List data={beerData} admin={admin} />
      <Footer />
    </PageContainer>
  );
};

export default Page;

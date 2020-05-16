import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { ApolloConsumer } from "react-apollo";
import { untappdUser } from "queries";
import routes from "lib/routes";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Route as RouteType } from "types/Route";
import cookies from "js-cookie";

import {
  Header,
  Avatar,
  UserName,
  TotalBeers,
  MainLink,
  Left,
  Right,
  Button,
  LinkButton,
  SubNavigation,
} from "./styles";
import spinner from "images/spinner.svg";

const preload = (route: RouteType, client: any) => {
  if (route.query) {
    client.query({
      query: route.query,
      variables: route.queryVariables,
    });
  }
};

const HeaderContainer = ({ login }: { login?: boolean }) => {
  const UserBeers = withRouter(_UserBeers);
  return (
    <Header>
      <MainLink href="#main">Skip to main</MainLink>
      {login ? <Left /> : <User />}
      <h1>New Beers</h1>
      {login ? <Right /> : <UserBeers />}
    </Header>
  );
};

const User = () => {
  const { loading, error, data } = useQuery(untappdUser);
  const [submenuVisible, setSubmenuVisible] = useState("initial");
  if (error) {
    return <Left />;
  }
  if (loading) {
    return (
      <Left>
        <img alt="loader" src={spinner} />
      </Left>
    );
  }
  const { avatar, name } = data.untappdUser;
  let className = "";
  if (submenuVisible === "true") {
    className = "selected";
  }
  return (
    <Left>
      {submenuVisible !== "initial" && (
        <SubNavigation visible={submenuVisible}>
          <Button
            style={{ fontSize: "30px" }}
            onClick={() => {
              cookies.remove("untappd_access_token");
              window.location.href = "/";
            }}
          >
            Logga ut
          </Button>
        </SubNavigation>
      )}
      <Button
        onClick={() => {
          setSubmenuVisible(submenuVisible === "true" ? "false" : "true");
        }}
        className={className}
      >
        <Avatar alt={name} src={avatar} />
        <UserName>{name}</UserName>
      </Button>
    </Left>
  );
};

const _UserBeers = ({ location: { pathname } }: RouteComponentProps) => {
  const { loading, error, data } = useQuery(untappdUser);
  if (error) {
    return <Right />;
  }
  if (loading) {
    return (
      <Right>
        <img alt="loader" src={spinner} />
      </Right>
    );
  }
  const { totalBeers } = data.untappdUser;

  return (
    <Right>
      <ApolloConsumer>
        {(client) => {
          const route = routes.find((route) => route.id === "Checkins");
          if (!route?.query || !route?.queryVariables) {
            return null;
          }
          let className = "";
          if (route.path && pathname.includes(route.path)) {
            className = "selected";
          }
          return (
            <LinkButton
              to="/checkins"
              onMouseOver={() => preload(route, client)}
              className={className}
            >
              <TotalBeers>
                {totalBeers}{" "}
                <span role="img" aria-label="Beer">
                  🍺
                </span>
              </TotalBeers>
            </LinkButton>
          );
        }}
      </ApolloConsumer>
    </Right>
  );
};

export default HeaderContainer;

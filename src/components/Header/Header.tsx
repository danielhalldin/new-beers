import React, { useState, useRef } from "react";
import { useApolloClient } from "@apollo/client";
import { useUntappdUserQuery } from "common/generated/generated";
import routes from "lib/routes";
import { useLocation } from "react-router-dom";
import queryForPage from "lib/queryForPage";
import preloadQuery from "lib/preloadQuery";
import { version } from "../../../package.json";
import useOutsideClick from "hooks/useOutsideClick";

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

const HeaderContainer = ({ login }: { login?: boolean }) => {
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
  const { loading, error, data } = useUntappdUserQuery({ errorPolicy: "all" });
  const [submenuVisible, setSubmenuVisible] = useState("initial");
  const ref = useRef<HTMLInputElement>(null);

  useOutsideClick(ref, () => {
    submenuVisible === "true" && setSubmenuVisible("false");
  });

  if (error) {
    return <Left />;
  }
  // CHECK WHEN RESOLVED https://github.com/apollographql/apollo-client/issues/6334 (&& !data)
  if (loading && !data) {
    return (
      <Left>
        <img alt="loader" src={spinner} />
      </Left>
    );
  }

  const avatar = data && data.untappdUser.avatar;
  const name = data && data.untappdUser.name;

  let className = "";
  if (submenuVisible === "true") {
    className = "selected";
  }
  return (
    <Left>
      {submenuVisible !== "initial" && (
        <SubNavigation visible={submenuVisible} ref={ref}>
          <Button
            style={{ fontSize: "30px" }}
            onClick={() => {
              localStorage.removeItem("untappd_access_token");
              window.location.href = "/";
            }}
          >
            Logga ut
          </Button>
          <br />
          Version: {version}
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

const UserBeers = () => {
  const client = useApolloClient();
  const { loading, error, data } = useUntappdUserQuery();
  const { pathname } = useLocation();
  if (error) {
    return <Right />;
  }
  // CHECK WHEN RESOLVED https://github.com/apollographql/apollo-client/issues/6334 (&& !data)
  if (loading && !data) {
    return (
      <Right>
        <img alt="loader" src={spinner} />
      </Right>
    );
  }
  const totalBeers = data && data.untappdUser.totalBeers;
  const id = "Checkins";
  const route = routes.find((route) => route.id === id);
  const { query, variables } = queryForPage(id);
  let className = "";
  if (route?.path && pathname.includes(route.path)) {
    className = "selected";
  }
  return (
    <Right>
      <LinkButton
        to="/checkins"
        onMouseOver={() => preloadQuery({ query, variables, client })}
        className={className}
      >
        <TotalBeers>
          {totalBeers}{" "}
          <span role="img" aria-label="Beer">
            🍺
          </span>
        </TotalBeers>
      </LinkButton>
    </Right>
  );
};

export default HeaderContainer;

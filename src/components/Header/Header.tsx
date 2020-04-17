import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";

import { untappdUser } from "../../queries";

import {
  Header,
  Avatar,
  UserName,
  TotalBeers,
  MainLink,
  Left,
  Right,
} from "./styles";
import spinner from "../../images/spinner.svg";

const HeaderContainer: FunctionComponent<{ login?: boolean }> = ({ login }) => {
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
  if (error) {
    return <Left />;
  }
  if (loading) {
    return (
      <Left>
        <img src={spinner} />
      </Left>
    );
  }
  const { avatar, name } = data.untappdUser;
  return (
    <Left>
      <Avatar alt={name} src={avatar} />
      <UserName>{name}</UserName>
    </Left>
  );
};

const UserBeers = () => {
  const { loading, error, data } = useQuery(untappdUser);
  if (error) {
    return <Right />;
  }
  if (loading) {
    return (
      <Right>
        <img src={spinner} />
      </Right>
    );
  }
  const { totalBeers } = data.untappdUser;

  return (
    <Right>
      <TotalBeers>
        {totalBeers}{" "}
        <span role="img" aria-label="Beer">
          🍺
        </span>
      </TotalBeers>
    </Right>
  );
};

export default HeaderContainer;

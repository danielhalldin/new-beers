import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";

import { untappdUser } from "../../queries";

import { Header, Avatar, UserName, TotalBeers, MainLink } from "./styles";
import spinner from "../../images/spinner.svg";

const HeaderContainer: FunctionComponent<{ login?: boolean }> = ({ login }) => {
  return (
    <Header>
      <MainLink href="#main">Skip to main</MainLink>
      {login ? <div /> : <Left login={login} />}
      <h1>New Beers</h1>
      {login ? <div /> : <Right login={login} />}
    </Header>
  );
};

interface UserProps {
  login?: boolean;
}

const Left: FunctionComponent<UserProps> = () => {
  const { loading, error, data } = useQuery(untappdUser);
  if (error) {
    return <div />;
  }
  if (loading) {
    return <img src={spinner} />;
  }
  const { avatar, name } = data.untappdUser;
  return (
    <div>
      <Avatar alt={name} src={avatar} />
      <UserName>{name}</UserName>
    </div>
  );
};

const Right: FunctionComponent<UserProps> = () => {
  const { loading, error, data } = useQuery(untappdUser);
  if (error) {
    return <div />;
  }
  if (loading) {
    return <img src={spinner} />;
  }
  const { totalBeers } = data.untappdUser;

  return (
    <div>
      <TotalBeers>
        {totalBeers}{" "}
        <span role="img" aria-label="Beer">
          🍺
        </span>
      </TotalBeers>
    </div>
  );
};

export default HeaderContainer;

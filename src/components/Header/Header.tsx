import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";

import { untappdUser } from "../../queries";

import { Header, Avatar, UserName, TotalBeers, MainLink } from "./styles";
import spinner from "../../images/spinner.svg";

const HeaderContainer: FunctionComponent<{ login?: boolean }> = ({ login }) => {
  let _loading, _error, _data;
  if (!login) {
    const { loading, error, data } = useQuery(untappdUser);
    _loading = loading;
    _error = error;
    _data = data;
  }

  return (
    <Header>
      <MainLink href="#main">Skip to main</MainLink>
      <Left login={login} loading={_loading} data={_data} error={_error} />
      <h1>New Beers</h1>
      <Right login={login} loading={_loading} data={_data} error={_error} />
    </Header>
  );
};

interface UserProps {
  loading: any;
  error: any;
  data: any;
  login: any;
}

const Left: FunctionComponent<UserProps> = ({
  loading,
  error,
  data,
  login,
}) => {
  if (login || error) {
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

const Right: FunctionComponent<UserProps> = ({
  loading,
  error,
  data,
  login,
}) => {
  if (login || error) {
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

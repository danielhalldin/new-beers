import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";

import { untappdUser } from "../../queries";

import { Header, Avatar, UserName, TotalBeers } from "./styles";
import { Loader } from "../Beers/styles";

const HeaderContainer: FunctionComponent<{ login?: boolean }> = ({ login }) => {
  return login ? <Header>New Beers</Header> : <WithUser />;
};

const WithUser = () => {
  const { loading, error, data } = useQuery(untappdUser);

  if (loading)
    return (
      <Loader>
        <span role="img" aria-label="Beer">
          🍺
        </span>{" "}
        Laddar...
      </Loader>
    );

  if (error) return <Loader>Error :(</Loader>;

  const { avatar, name, totalBeers } = data.untappdUser;
  return (
    <Header>
      <div>
        <Avatar src={avatar} />
        <UserName>{name}</UserName>
      </div>
      <div>New Beers</div>
      <div>
        <TotalBeers>
          {totalBeers}{" "}
          <span role="img" aria-label="Beer">
            🍺
          </span>
        </TotalBeers>
      </div>
    </Header>
  );
};

export default HeaderContainer;
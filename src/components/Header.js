import React, { Component } from "react";
import { Header, Avatar, HeaderCell, UserName } from "./Header.styles";
import { Loader } from "./Beers.styles";
import { untappdUser } from "../queries";
import { Query } from "react-apollo";

class HeaderContainer extends Component {
  render() {
    const user = this.props.user;

    if (this.props.login) {
      return (
        <Header>
          <HeaderCell logo textAlign="center" width="100%">
            NEW BEERS
          </HeaderCell>
        </Header>
      );
    } else {
      return (
        <Query query={untappdUser}>
          {({ loading, error, data }) => {
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
                <HeaderCell textAlign="left" width="30%">
                  <Avatar src={avatar} />
                  <UserName>{name}</UserName>
                </HeaderCell>
                <HeaderCell logo textAlign="center" width="40%">
                  NEW BEERS
                </HeaderCell>
                <HeaderCell textAlign="right" width="30%">
                  {totalBeers} 🍺️
                </HeaderCell>
              </Header>
            );
          }}
        </Query>
      );
    }
  }
}

export default HeaderContainer;

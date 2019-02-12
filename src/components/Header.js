import React, { Component } from "react";
import { Header, Avatar, UserName, TotalBeers } from "./Header.styles";
import { Loader } from "./Beers.styles";
import { untappdUser } from "../queries";
import { Query } from "react-apollo";

class HeaderContainer extends Component {
  render() {
    if (this.props.login) {
      return <Header>New Beers</Header>;
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
          }}
        </Query>
      );
    }
  }
}

export default HeaderContainer;

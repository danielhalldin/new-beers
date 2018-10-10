import React, { Component } from "react";
import { Header, Avatar, HeaderCell, UserName } from "./Header.styles";

class HeaderContainer extends Component {
  render() {
    const user = this.props.user;
    const isFriend = this.props.isFriend;

    if (this.props.login) {
      return (
        <Header>
          <HeaderCell width="20%"> </HeaderCell>
          <HeaderCell textAlign="center" width="60%">
            NEW BEERS
          </HeaderCell>
          <HeaderCell textAlign="right" width="20%">
            <span role="img" aria-label="Beer">
              🍺
            </span>
          </HeaderCell>
        </Header>
      );
    }

    return (
      <Header>
        <HeaderCell textAlign="left" width="30%">
          <Avatar src={user.avatar} />
          <UserName>{user.name}</UserName>
        </HeaderCell>
        <HeaderCell logo textAlign="center" width="40%">
          NEW BEERS
        </HeaderCell>
        <HeaderCell textAlign="right" width="30%">
          {user.totalBeers} {isFriend ? "⭐" : "🍺️"}
        </HeaderCell>
      </Header>
    );
  }
}

export default HeaderContainer;

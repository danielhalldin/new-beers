import React, { Component } from "react";
import { Header, Avatar, HeaderCell, HeaderUserData } from "./Header.styles";

class HeaderContainer extends Component {
  render() {
    const user = this.props.user;

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
        <HeaderCell textAlign="left" width="20%">
          <Avatar src={user.avatar} />
          <HeaderUserData>
            {user.name}
            <br />
            {user.checkins}{" "}
            <span role="img" aria-label="Beer">
              🍺
            </span>
          </HeaderUserData>
        </HeaderCell>

        <HeaderCell textAlign="center" width="60%">
          NEW BEERS
        </HeaderCell>
        <HeaderCell textAlign="right" width="20%">
          <span role="img" aria-label="Beer" style={{ marginRight: "7px" }}>
            🍺
          </span>
        </HeaderCell>
      </Header>
    );
  }
}

export default HeaderContainer;

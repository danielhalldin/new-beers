import React, { Component } from "react";
import { LoginButton, Login } from "./Login.styles";

class LoginContainer extends Component {
  render() {
    return (
      <Login>
        För att kunna använda tjänsten, <br />
        behöver du logga in på Untappd.
        <br />
        <br />
        <LoginButton href={this.props.href}>Logga in här</LoginButton>
      </Login>
    );
  }
}

export default LoginContainer;

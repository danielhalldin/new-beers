import React, { Component } from "react";
import { LoginButton, Login } from "./styles";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
  }
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

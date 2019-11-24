import React from "react";
import { LoginButton, Login } from "./Login.styles";

const LoginContainer = ({ href }) => {
  return (
    <Login>
      För att kunna använda tjänsten, <br />
      behöver du logga in på Untappd.
      <br />
      <br />
      <LoginButton href={href}>Logga in här</LoginButton>
    </Login>
  );
};

export default LoginContainer;

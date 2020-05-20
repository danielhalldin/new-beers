import React from "react";
import Header from "components/Header";
import { Button, Wrapper } from "./styles";

const Login = () => {
  const loginUrl = `${process.env.REACT_APP_LOGIN_URL}?returnUrl=${process.env.REACT_APP_PUBLIC_URL}`;
  return (
    <>
      <Header login />
      <Wrapper id={"main"}>
        <p>
          För att kunna använda tjänsten, <br />
          behöver du logga in på Untappd.
        </p>
        <Button href={loginUrl}>Logga in här</Button>
      </Wrapper>
    </>
  );
};

export default Login;

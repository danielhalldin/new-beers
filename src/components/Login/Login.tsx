import React from "react";
import Header from "components/Header";
import { Button, Wrapper } from "./styles";

const Login = () => {
  return (
    <>
      <Header login />
      <Wrapper id={"main"}>
        <p>
          För att kunna använda tjänsten, <br />
          behöver du logga in på Untappd.
        </p>
        <Button href={`${process.env.REACT_APP_LOGIN_URL}`}>
          Logga in här
        </Button>
      </Wrapper>
    </>
  );
};

export default Login;

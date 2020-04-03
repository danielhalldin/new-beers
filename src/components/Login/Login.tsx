import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Layout } from "../Layout.styles";
import { Button, Wrapper } from "./styles";

const Login = () => {
  return (
    <Layout>
      <Header login />
      <Wrapper>
        För att kunna använda tjänsten, <br />
        behöver du logga in på Untappd.
        <Button href={`${process.env.REACT_APP_LOGIN_URL}`}>
          Logga in här
        </Button>
      </Wrapper>
      <Footer />
    </Layout>
  );
};

export default Login;

import React from "react";
import Header from "components/Header";
import { Button, Wrapper } from "./styles";

const NotFriend = () => {
  const friendUrl = `https://untappd.com/user/${process.env.REACT_APP_SUPER_USER}`;
  return (
    <>
      <Header login />
      <Wrapper id={"main"}>
        <p>
          För att kunna använda tjänsten, <br />
          behöver du vän med mig.
        </p>
        <Button href={friendUrl}>Bli vän</Button>
      </Wrapper>
    </>
  );
};

export default NotFriend;

import React from "react";
import { Footer, PbUntappd } from "./styles";
import untappd from "../../images/pbu_80_yellow.png";

const FooterContainer = () => {
  return (
    <Footer>
      <PbUntappd src={untappd} />
    </Footer>
  );
};

export default FooterContainer;

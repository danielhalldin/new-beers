import React, { Component } from "react";
import { Footer, PbUntappd } from "./Footer.styles";
import untappd from "./images/pbu_80_yellow.png";

class FotterContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Footer>
        <PbUntappd src={untappd} />
      </Footer>
    );
  }
}

export default FotterContainer;

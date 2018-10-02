import React, { Component } from "react";
import { Footer, PbUntappd } from "./styles";
import untappd from "./images/pbu_80_yellow.png";
import systembolaget from "./images/systembolaget.png";

class FoioterContainer extends Component {
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

export default FoioterContainer;

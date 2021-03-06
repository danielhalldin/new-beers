import React, { FunctionComponent } from "react";
import styled from "styled-components/macro";

import { truncateText } from "lib/text";

const StyledBrewery = styled.div<{ length: number }>`
  padding: 0 5px;
  font-weight: 500;
  font-size: 18px;
  font-size: ${(props) => {
    if (props.length > 35) {
      return "14px";
    }
    if (props.length > 25) {
      return "17px";
    }
    return "20px";
  }};
  text-align: center;
  line-height: 1em;
  font-family: "Hind", cursive;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  margin: auto;
`;

const Brewery: FunctionComponent<{ name: string }> = ({ name }) => {
  const _name = truncateText(name, 65);
  return <StyledBrewery length={_name.length}>{_name}</StyledBrewery>;
};

export default Brewery;

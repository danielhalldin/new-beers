import React from "react";
import styled from "styled-components";

const StyledBrewery = styled.div`
  padding: 0 5px;
  font-weight: 500;
  font-size: 18px;
  font-size: ${props => {
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

const truncateText = (text, limit) => {
  if (!text) {
    return "";
  }
  if (text.length < limit) {
    return text;
  }
  text = text.slice(0, limit).split(" ");
  text.pop();
  return text.join(" ") + "…";
};

const Brewery = ({ name }) => {
  const _name = truncateText(name, 65);
  return <StyledBrewery length={_name.length}>{_name}</StyledBrewery>;
};

export default Brewery;

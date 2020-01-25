import React from "react";
import styled from "styled-components";

const StyledName = styled.div`
  text-align: center;
  line-height: 1em;
  font-family: "Hind", cursive;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  margin: auto;
  font-weight: 700;
  padding: 0 5px;
  font-size: ${props => {
    if (props.length > 30) {
      return "17px";
    } else if (props.length > 25) {
      return "18px";
    } else if (props.length > 20) {
      return "21px";
    } else if (props.length > 15) {
      return "24px";
    }
    return "27px";
  }};
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

const Name = ({ name }) => {
  const _name = truncateText(name, 65);
  return <StyledName length={_name.length}>{_name}</StyledName>;
};

export default Name;

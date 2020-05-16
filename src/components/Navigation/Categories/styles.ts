import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { colors } from "components/global.styles";

export const Category = styled(Link)`
  display: block;
  font-family: "Bowlby One SC", cursive;
  font-size: 30px;
  margin: 10px 0;
  text-transform: capitalize;
  cursor: pointer;
  text-decoration: none;
  color: ${colors.textLight};
  &.selected {
    color: ${colors.highlight};
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

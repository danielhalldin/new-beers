import styled from "styled-components/macro";
import { colors } from "../global.styles";
import { Link } from "react-router-dom";

const Navigation = styled.nav`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  font-family: "Bowlby One SC", cursive;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
  text-transform: capitalize;
  z-index: 10;
  width: 100vw;
  position: fixed;
  bottom: 0;
  color: ${colors.textLight};
  background-color: ${colors.dark};
  padding-bottom: 7px;
  box-shadow: 0 0 20px 15px rgba(0, 0, 0, 0.5);
  > h2 {
    font-size: 26px;
    align-self: center;
    margin: 0;
    padding-top: 6px;
  }
`;

const Button = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${colors.textLight};
  font-size: 40px;
  &:hover {
    color: ${colors.highlight};
  }
  &.left {
    text-align: right;
    padding-right: 20px;
  }
  &.right {
    text-align: left;
    padding-left: 20px;
  }
`;

export { Navigation, Button };

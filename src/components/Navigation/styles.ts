import styled from "styled-components/macro";
import { colors } from "../global.styles";
import { Link } from "react-router-dom";

const Navigation = styled.nav`
  font-family: "Bowlby One SC", cursive;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
  text-transform: capitalize;
  h2 {
    font-size: 26px;
    display: inline;
    padding: 0;
    margin: 0;
  }
  z-index: 10;
  width: 100vw;
  position: fixed;
  bottom: 0;
  color: ${colors.textLight};
  background-color: ${colors.dark};
  padding-bottom: 7px;
  box-shadow: 0 0 20px 15px rgba(0, 0, 0, 0.5);
`;

const Button = styled(Link)`
  margin: 0 20px;
  cursor: pointer;
  text-decoration: none;
  color: ${colors.textLight};
  font-size: 40px;
  &:hover {
    color: ${colors.textDark};
  }
`;

export { Navigation, Button };

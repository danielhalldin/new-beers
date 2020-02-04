import styled from "styled-components/macro";
import { colors } from "../global.styles";
import { Link } from "react-router-dom";

const Navigation = styled.div`
  grid-area: menu;
  font-family: "Bowlby One SC", cursive;
  text-shadow: 20px 20px 15px rgba(0, 0, 0, 0.5);
  font-size: 26px;
  text-align: center;
  color: ${colors.dark};
  text-transform: capitalize;
`;

const Button = styled(Link)`
  margin: 0 20px;
  cursor: pointer;
  text-decoration: none;
  color: ${colors.dark};
  font-size: 40px;
  &:hover {
    color: ${colors.textDark};
  }
`;

export { Navigation, Button };

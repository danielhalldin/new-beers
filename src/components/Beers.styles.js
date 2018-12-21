import styled, { keyframes } from "styled-components";
import { colors } from "./common.styles";
import { Link } from "react-router-dom";

const Loader = styled.div`
  font-family: "Bowlby One SC", cursive;
  text-shadow: 20px 20px 15px rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  text-align: center;
  padding-top: 50px;
  font-size: 24px;
  font-weight: 300;
  && .beer {
    font-size: 60px;
    display: block;
  }
`;

const FadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`;

const BeersContainer = styled.div`
  grid-area: content;
  animation: ${FadeInAnimation} 1s;
  color: ${colors.textDark};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Menu = styled.div`
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
`;

export { Loader, BeersContainer, Menu, Button };

import styled, { css, keyframes } from "styled-components";
import { colors } from "../common.styles";
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
  0% {
    opacity: 0;
  }

  100 {
    opacity: 1;
  }
`;

const FadeInAnimationRule = css`
  ${FadeInAnimation} 1s;
`;

const BeersContainer = styled.div`
  grid-area: content;
  animation: ${FadeInAnimationRule};
  color: ${colors.textDark};
  margin: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
  grid-gap: 20px;
  justify-content: space-around;
  justify-items: center;
  align-items: center;
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
  font-size: 40px;
  &:hover {
    color: ${colors.textDark};
  }
`;

export { Loader, BeersContainer, Menu, Button };

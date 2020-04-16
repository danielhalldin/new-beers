import styled, { keyframes } from "styled-components/macro";
import { colors } from "../global.styles";

const Loader = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  height: calc(100vh - 35px);
  font-family: "Bowlby One SC", cursive;
  text-shadow: 20px 20px 15px rgba(0, 0, 0, 0.5);
  width: 100vw;
  text-align: center;
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

const BeersContainer = styled.main`
  grid-area: content;
  animation: ${FadeInAnimation} 1s;
  color: ${colors.textDark};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
  grid-gap: 20px;
  justify-content: space-around;
  justify-items: center;
  align-items: center;
  margin: 70px 20px 0 20px;
`;

export { Loader, BeersContainer };

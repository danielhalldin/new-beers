import styled, { keyframes } from "styled-components/macro";
import { colors } from "components/global.styles";

const FadeInAnimation = keyframes`  
  0% {
    opacity: 0;
  }

  100 {
    opacity: 1;
  }
`;

export const Header = styled.h2`
  font-family: "Bowlby One SC", cursive;
  font-size: 40px;
  margin: 90px 0 10px 0;
  display: block;
  text-align: center;
  text-transform: capitalize;
  text-shadow: 20px 20px 15px rgba(0, 0, 0, 0.5);
`;

export const ListContainer = styled.div`
  grid-area: "content";
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  align-content: baseline;
  justify-content: space-evenly;
  padding-left: 5px;
  min-height: 100vh;
  animation: ${FadeInAnimation} 1s;
  color: ${colors.dark};
`;

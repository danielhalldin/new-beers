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

export const PageContainer = styled.main`
  grid-area: content;
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

export const ListContainer = styled.main`
  grid-area: content;
  animation: ${FadeInAnimation} 1s;
  color: ${colors.dark};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
  grid-gap: 20px;
  justify-content: space-around;
  justify-items: center;
  align-items: center;
  margin: 0 20px;
`;

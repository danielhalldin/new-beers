import styled, { keyframes } from "styled-components/macro";
import { Link } from "react-router-dom";
import { colors } from "../global.styles";

const FadeInAnimation = keyframes`  
  0% {
    opacity: 0;
  }

  100 {
    opacity: 1;
  }
`;

export const CategoriesContainer = styled.main`
  grid-area: content;
  animation: ${FadeInAnimation} 1s;
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(50px, 1fr));
  grid-gap: 20px;
  justify-content: space-around;
  justify-items: center;
  align-items: center;
  margin: 70px 20px 0 20px;
  padding: 10vh 0 30vh 0;
  height: calc(60vh - 87px);
`;

export const Category = styled(Link)`
  font-family: "Bowlby One SC", cursive;
  font-size: 40px;
  cursor: pointer;
  text-decoration: none;
  color: ${colors.textDark};
  text-shadow: 20px 20px 15px rgba(0, 0, 0, 0.5);
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.95) translateY(4px);
    text-shadow: 10px 10px 7px rgba(0, 0, 0, 0.5);
  }
`;

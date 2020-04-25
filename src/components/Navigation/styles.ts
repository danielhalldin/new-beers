import styled from "styled-components/macro";
import { colors } from "../global.styles";
import { Link } from "react-router-dom";

export const Navigation = styled.nav`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  justify-content: space-around;
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
  padding: 15px 0;
  box-shadow: 0 0 20px 15px rgba(0, 0, 0, 0.5);
`;

export const Button = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${colors.textLight};
  &.disabled {
    color: #aaa;
    img {
      filter: invert(17%) sepia(28%) saturate(100%) hue-rotate(359deg)
        brightness(102%) contrast(32%);
    }
  }
  &.selected {
    color: ${colors.highlight};
    img {
      filter: invert(17%) sepia(28%) saturate(3461%) hue-rotate(359deg)
        brightness(102%) contrast(103%);
    }
  }
  &:active {
    transform: translateY(4px);
  }
`;

export const Icon = styled.img`
  width: 30px;
  margin-bottom: 5px;
`;

export const IconText = styled.div`
  display: block;
  font-size: 13px;
`;

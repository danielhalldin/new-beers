import styled from "styled-components/macro";
import {
  colors,
  unfoldUpAnimation,
  foldDownAnimation,
} from "components/global.styles";
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

export const SubNavigation = styled.div<{
  visible: string;
  ref: any;
}>`
  padding: 10px 0;
  position: fixed;
  bottom: 84px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  transform: scaleY(0);
  transform-origin: 0% 100%;
  box-shadow: 0 -10px 30px 0px rgba(0, 0, 0, 0.5);
  ${(props) => {
    return props.visible === "true" ? unfoldUpAnimation : foldDownAnimation;
  }};
`;

const _button = `
  cursor: pointer;
  text-decoration: none;
  color: ${colors.textLight};
  fill: currentColor;
  svg {
    fill: currentColor;
    width: 30px;
    height: 30px;
    margin-bottom: 5px;
  }
  &.disabled {
    color: #aaa;
  }
  &.selected {
    color: ${colors.highlight};
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const LinkButton = styled(Link)`
  ${_button}
`;

export const Button = styled.a`
  ${_button}
`;

export const IconText = styled.div`
  display: block;
  font-size: 13px;
`;

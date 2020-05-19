import {
  colors,
  unfoldDownAnimation,
  foldUpAnimation,
} from "components/global.styles";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const Header = styled.header`
  padding: 10px 2%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-column-gap: 10px;
  justify-items: center;
  align-items: center;
  font-family: "Bowlby One SC", cursive;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  color: ${colors.textLight};
  background-color: ${colors.dark};
  box-shadow: 0 20px 15px rgba(0, 0, 0, 0.5);
  min-height: 52px;
  h1 {
    font-size: 30px;
    display: inline;
    padding: 0;
    margin: 0;
  }
  z-index: 10;
  width: 96%;
  position: fixed;
  top: 0;
`;

export const HeaderUserData = styled.div`
  font-family: Calibri, Helvetica;
  font-size: 17px;
  line-height: 18px;
  display: inline-block;
  text-align: left;
  vertical-align: top;
  margin-top: 10px;
  font-weight: 700;
`;

export const Avatar = styled.img`
  height: 50px;
  border-radius: 25px;
  border: 0 solid ${colors.textDark};
  display: inline-block;
  margin-top: 7px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const UserName = styled.div`
  transform: translate(0, -65%);
  display: inline-block;
  margin-left: 7px;
  font-size: 20px;
`;

export const TotalBeers = styled.div`
  font-size: 20px;
`;

export const MainLink = styled.a`
  position: absolute;
  top: -40px;
  left: 0;
  background: #000000;
  color: white;
  padding: 8px;
  z-index: 100;
  :focus {
    top: 0;
  }
`;

export const Left = styled.div`
  justify-self: left;
`;

export const Right = styled.div`
  justify-self: right;
`;

export const SubNavigation = styled.div<{
  visible: string;
  ref: any;
}>`
  padding: 10px;
  position: fixed;
  top: 83px;
  left: 0;
  width: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
  transform: scaleY(0);
  transform-origin: 0% 100%;
  box-shadow: 0 -10px 30px 0px rgba(0, 0, 0, 0.5);
  ${(props) => {
    return props.visible === "true" ? unfoldDownAnimation : foldUpAnimation;
  }};
`;

const _button = `
  display: block;
  cursor: pointer;
  color: ${colors.textLight};
  text-decoration: none;
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

export const Button = styled.a`
  ${_button}
`;

export const LinkButton = styled(Link)`
  ${_button}
`;

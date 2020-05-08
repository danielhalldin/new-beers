import { colors } from "../global.styles";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const Header = styled.header`
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
  padding: 0 2%;
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
  height: 40px;
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
  font-size: 17px;
`;

export const TotalBeers = styled.div`
  font-size: 17px;
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

export const Button = styled(Link)`
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

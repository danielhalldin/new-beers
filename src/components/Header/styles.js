import { colors } from "../global.styles";

import styled from "styled-components/macro";

const Header = styled.div`
  padding: 0 10px;
  grid-area: header;
  display: grid;
  grid-template-columns: auto 1fr auto;
  justify-items: center;
  align-items: center;
  font-family: "Bowlby One SC", cursive;
  text-decoration: italic;
  font-size: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  color: ${colors.textLight};
  background-color: ${colors.dark};
  box-shadow: 0 20px 15px rgba(0, 0, 0, 0.5);
  min-height: 52px;
`;

const HeaderUserData = styled.div`
  font-family: Calibri, Helvetica;
  font-size: 17px;
  line-height: 18px;
  display: inline-block;
  text-align: left;
  vertical-align: top;
  margin-top: 10px;
  font-weight: 700;
`;

const Avatar = styled.img`
  height: 40px;
  border-radius: 25px;
  border: 0 solid ${colors.textDark};
  display: inline-block;
  margin-top: 7px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const UserName = styled.div`
  transform: translate(0, -65%);
  display: inline-block;
  margin-left: 7px;
  font-size: 17px;
`;

const TotalBeers = styled.div`
  font-size: 17px;
`;

export { Header, HeaderUserData, Avatar, UserName, TotalBeers };

import styled from "styled-components";
import { colors } from "./common.styles";

const Header = styled.div`
  font-family: GillSans-UltraBold, Impact, "Arial Black", sans-serif;
  text-decoration: italic;
  font-size: 18px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  color: ${colors.textLight};
  background-color: ${colors.dark};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
`;

const HeaderCell = styled.div`
  font-size: ${props => (props.logo ? "30px" : "18px")};
  width: ${props => props.width};
  margin: auto 0;
  text-align: ${props => props.textAlign};
`;

const HeaderUserData = styled.div`
  font-family: Calibri, Helvetica;
  font-size: 15px;
  line-height: 18px;
  display: inline-block;
  text-align: left;
  vertical-align: top;
  margin: 10px 0 0 7px;
  font-weight: Bold;
`;

const Avatar = styled.img`
  height: 40px;
  border-radius: 25px;
  border: 0 solid ${colors.textDark};
  display: inline-block;
  margin: 7px 4px 0 7px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const UserName = styled.div`
  transform: translate(0, -50%);
  display: inline-block;
  margin-left: 7px;
`;

export { Header, HeaderCell, HeaderUserData, Avatar, UserName };

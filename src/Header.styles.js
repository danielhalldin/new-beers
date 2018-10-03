import styled from "styled-components";
import { colors } from "./common.styles";

const Header = styled.div`
  font-family: GillSans-UltraBold, Impact, "Arial Black", sans-serif;
  text-decoration: italic;
  font-size: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  color: ${colors.textLight};
  background-color: ${colors.dark};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const HeaderCell = styled.div`
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
  margin-top: 7px;
  font-weight: Bold;
`;

const Avatar = styled.img`
  height: 40px;
  border-radius: 25px;
  border: 0 solid ${colors.textDark};
  display: inline-block;
  margin: 4px 10px 0 4px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export { Header, HeaderCell, HeaderUserData, Avatar };

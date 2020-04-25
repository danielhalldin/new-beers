import styled from "styled-components/macro";
import { colors } from "../global.styles";

const Footer = styled.footer`
  grid-area: footer;
  padding: 10px;
  background-color: ${colors.dark};
  text-align: center;
  padding-bottom: 100px;
  height: 35px;
`;

const PbUntappd = styled.img`
  height: 30px;
  display: inline-block;
  margin: 0 5px;
`;

export { Footer, PbUntappd };

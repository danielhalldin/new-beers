import styled from "styled-components";
import { colors } from "../global.styles";

const Footer = styled.div`
  grid-area: footer;
  padding: 10px;
  background-color: ${colors.dark};
  text-align: center;
`;

const PbUntappd = styled.img`
  height: 30px;
  display: inline-block;
  margin: 0 5px;
`;

export { Footer, PbUntappd };

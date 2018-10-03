import styled from "styled-components";
import { colors } from "./common.styles";

const Footer = styled.div`
  margin-top: 30px;
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

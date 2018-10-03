import styled from "styled-components";
import { colors } from "./common.styles";

const Loader = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  padding-top: 50px;
  font-size: 22px;
  font-weight: bold;
`;

const BeersContainer = styled.div`
  color: ${colors.textDark};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export { Loader, BeersContainer };

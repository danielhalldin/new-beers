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

const Header = styled.div`
  margin-top: 17px;
  font-family: GillSans-UltraBold, Impact, "Arial Black", sans-serif;
  text-shadow: 20px 20px 15px rgba(0, 0, 0, 0.5);
  font-size: 22px;
  text-align: center;
  color: ${colors.dark};
  text-transform: uppercase;
`;

export { Loader, BeersContainer, Header };

import styled from "styled-components/macro";
import { colors } from "components/global.styles";
export const PageContainer = styled.main`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header"
    "content"
    "rest"
    "footer";
  grid-gap: 20px;
`;

export const Header = styled.h2`
  grid-area: "header";
  background-color: ${colors.dark};
  color: ${colors.textLight};
  font-family: "Bowlby One SC", cursive;
  font-size: 30px;
  padding: 67px 0 10px 0;
  margin: 0;
  display: block;
  text-align: center;
  text-transform: capitalize;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const Loader = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  height: calc(100vh - 35px);
  font-family: "Bowlby One SC", cursive;
  text-shadow: 20px 20px 15px rgba(0, 0, 0, 0.5);
  width: 100vw;
  text-align: center;
  font-size: 24px;
  font-weight: 300;
  && .beer {
    font-size: 60px;
    display: block;
  }
`;

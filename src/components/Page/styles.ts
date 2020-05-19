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
  padding: 83px 0 10px 0;
`;

export const Header = styled.h2`
  grid-area: header;
  background-color: ${colors.dark};
  color: ${colors.textLight};
  font-family: "Bowlby One SC", cursive;
  font-size: 30px;
  padding: 10px 0 10px 0;
  margin: 0;
  display: block;
  text-align: center;
  text-transform: capitalize;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const Loader = styled.div`
  grid-area: content;
  display: grid;
  align-content: center;
  justify-content: center;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  font-family: "Bowlby One SC", cursive;
  text-shadow: 20px 20px 15px rgba(0, 0, 0, 0.5);
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-weight: 300;
  && .beer {
    font-size: 60px;
    display: block;
  }
`;

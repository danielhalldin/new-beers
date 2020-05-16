import styled from "styled-components/macro";

export const PageContainer = styled.main`
  grid-area: content;
`;

export const Header = styled.h2`
  font-family: "Bowlby One SC", cursive;
  font-size: 40px;
  margin: 90px 0 10px 0;
  display: block;
  text-align: center;
  text-transform: capitalize;
  text-shadow: 20px 20px 15px rgba(0, 0, 0, 0.5);
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

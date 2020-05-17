import styled from "styled-components/macro";

const Layout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header"
    "content"
    "footer";
  grid-gap: 20px;
  height: 100vh;
`;

export { Layout };

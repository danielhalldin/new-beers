import styled from "styled-components/macro";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "menu"
    "content"
    "footer";
  grid-gap: 20px;
`;

export { Layout };

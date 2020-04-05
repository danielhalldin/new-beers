import { createGlobalStyle } from "styled-components/macro";
import oak from "../images/oak.jpg";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Hind", cursive;
    line-height: 1.2;
    margin: 0; 
    padding: 0; 
    background-color: #888; 
    color: #333; 
    background-image: url("${oak}");
  }
`;

const colors = {
  dark: "#333",
  textLight: "#ddd",
  textDark: "#444",
};

export { GlobalStyle, colors };

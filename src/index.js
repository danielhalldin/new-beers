import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Fastclick from "react-fastclick-alt";
import { GlobalStyle } from "./components/global.styles";

ReactDOM.render(
  <Fastclick>
    <GlobalStyle />
    <App />
  </Fastclick>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Fastclick from "react-fastclick-alt";

ReactDOM.render(
  <Fastclick>
    <App />
  </Fastclick>,
  document.getElementById("root")
);

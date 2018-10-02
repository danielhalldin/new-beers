import React, { Component } from "react";
import cookies from "js-cookie";
import Beers from "./beers";
import Header from "./header";

class App extends Component {
  render() {
    const urlParams = new URLSearchParams(window.location.search);
    let untappd_access_token = cookies.get("t");

    return !untappd_access_token ? (
      <div>
        <a href={`${process.env.REACT_APP_LOGIN_URL}`}>login</a>
      </div>
    ) : (
      <div>
        <Header />
        <Beers />
      </div>
    );
  }
}

export default App;

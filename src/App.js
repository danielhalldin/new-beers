import React, { Component } from "react";
import cookies from "js-cookie";
import Beers from "./beers";

class App extends Component {
  render() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    let untappd_access_token = cookies.get("untappd_access_token");

    if (token && !untappd_access_token) {
      cookies.set("untappd_access_token", token);
      window.location.href = "/";
    }

    return !untappd_access_token ? (
      <div>
        <a href={`${process.env.REACT_APP_LOGIN_URL}`}>login</a>
      </div>
    ) : (
      <Beers />
    );
  }
}

export default App;

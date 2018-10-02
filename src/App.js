import React, { Component } from "react";
import cookies from "js-cookie";
import Beers from "./beers";
import Header from "./header";
import Footer from "./footer";
import Login from "./Login";

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
      <div style={{ textAlign: "center" }}>
        <Header login />
        <Login href={`${process.env.REACT_APP_LOGIN_URL}`} />
      </div>
    ) : (
      <div>
        <Header />
        <Beers />
        <Footer />
      </div>
    );
  }
}

export default App;

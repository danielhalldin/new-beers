import React, { Component } from "react";
import { Header, Avatar, HeaderCell, HeaderUserData } from "./Header.styles";
import { ApolloProvider } from "react-apollo";
import { Query } from "react-apollo";
import appoloClient from "../lib/apolloClient";
import { untappdUser } from "../queries";
import cookies from "js-cookie";

class HeaderContainer extends Component {
  render() {
    const untappd_access_token = cookies.get("untappd_access_token");
    if (this.props.login) {
      return (
        <Header>
          <HeaderCell width="20%"> </HeaderCell>
          <HeaderCell textAlign="center" width="60%">
            NEW BEERS
          </HeaderCell>
          <HeaderCell textAlign="right" width="20%">
            <span role="img" aria-label="Beer">
              🍺
            </span>
          </HeaderCell>
        </Header>
      );
    }

    return (
      <ApolloProvider client={appoloClient(untappd_access_token)}>
        <Query query={untappdUser}>
          {({ loading, error, data }) => {
            if (loading)
              return (
                <Header>
                  <span role="img" aria-label="Beer">
                    🍺
                  </span>{" "}
                  Laddar...
                </Header>
              );
            if (error) return <p>Error :(</p>;

            return (
              <Header>
                <HeaderCell textAlign="left" width="20%">
                  <Avatar src={data.untappdUser.avatar} />
                  <HeaderUserData>
                    {data.untappdUser.name}
                    <br />
                    {data.untappdUser.checkins}{" "}
                    <span role="img" aria-label="Beer">
                      🍺
                    </span>
                  </HeaderUserData>
                </HeaderCell>

                <HeaderCell textAlign="center" width="60%">
                  NEW BEERS
                </HeaderCell>
                <HeaderCell textAlign="right" width="20%">
                  <span
                    role="img"
                    aria-label="Beer"
                    style={{ marginRight: "7px" }}
                  >
                    🍺
                  </span>
                </HeaderCell>
              </Header>
            );
          }}
        </Query>
      </ApolloProvider>
    );
  }
}

export default HeaderContainer;

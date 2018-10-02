import React, { Component } from "react";
import { Header, Avatar, HeaderCell, HeaderUserData } from "./styles";
import { ApolloProvider } from "react-apollo";
import { Query } from "react-apollo";
import appoloClient from "./lib/apolloClient";
import { untappdUser } from "./queries";
import cookies from "js-cookie";

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const untappd_access_token = cookies.get("untappd_access_token");
    return (
      <ApolloProvider client={appoloClient(untappd_access_token)}>
        <Query query={untappdUser}>
          {({ loading, error, data }) => {
            if (loading) return <Header>🍺 Laddar...</Header>;
            if (error) return <p>Error :(</p>;

            return (
              <Header>
                <HeaderCell textAlign="left" width="20%">
                  <Avatar src={data.untappdUser.avatar} />
                  <HeaderUserData>
                    {data.untappdUser.name}
                    <br />
                    {data.untappdUser.checkins} 🍺
                  </HeaderUserData>
                </HeaderCell>

                <HeaderCell textAlign="center" width="60%">
                  NEW BEERS 🍻
                </HeaderCell>
                <HeaderCell width="20%"> </HeaderCell>
              </Header>
            );
          }}
        </Query>
      </ApolloProvider>
    );
  }
}

export default HeaderContainer;

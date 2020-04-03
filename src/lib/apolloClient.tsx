import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";

const client = (untappd_access_token: string) => {
  return new ApolloClient({
    link: ApolloLink.from([
      new HttpLink({
        uri: `${process.env.REACT_APP_GRAPHQL_URL}`,
        headers: {
          "x-untappd-access-token": untappd_access_token
        }
      })
    ]),
    cache: new InMemoryCache()
  });
};

export default client;

import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";

const client = untappd_access_token => {
  return new ApolloClient({
    link: ApolloLink.from([
      new HttpLink({
        uri: "http://localhost:4444/graphql",
        headers: {
          untappd_access_token
        }
      })
    ]),
    cache: new InMemoryCache()
  });
};

export default client;

import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
} from "@apollo/client";

export interface Context {
  cache: InMemoryCache;
  client: ApolloClient<InMemoryCache>;
}

const client = new ApolloClient({
  link: ApolloLink.from([
    new HttpLink({
      uri: `${process.env.REACT_APP_GRAPHQL_URL}`,
      headers: {
        "x-untappd-access-token":
          localStorage.getItem("untappd_access_token") || "",
      },
      useGETForQueries: true,
    }),
  ]),
  cache: new InMemoryCache(),
});

export default client;

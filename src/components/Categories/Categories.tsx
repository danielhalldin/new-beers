import React, { FunctionComponent } from "react";
import { ApolloConsumer } from "react-apollo";
import { CategoriesContainer, Category } from "./styles";
import routes from "../../lib/routes";

const preload = (route: any, client: any) => {
  if (route.query) {
    client.query({
      query: route.query,
      variables: route.queryVariables,
    });
  }
};

const Categories: FunctionComponent = () => {
  const categories = routes
    .filter((route) => route.path.startsWith("/katagorier/"))
    .map((route) => {
      return (
        <ApolloConsumer key={route.id}>
          {(client) => (
            <Category
              to={route.path}
              onMouseOver={() => preload(route, client)}
            >
              {route.id}
            </Category>
          )}
        </ApolloConsumer>
      );
    });
  return <CategoriesContainer id={"main"}>{categories}</CategoriesContainer>;
};

export default Categories;

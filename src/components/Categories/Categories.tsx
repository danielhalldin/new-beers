import React, { FunctionComponent } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { ApolloConsumer } from "react-apollo";
import { Category } from "./styles";
import routes from "../../lib/routes";

const preload = (route: any, client: any) => {
  if (route.query) {
    client.query({
      query: route.query,
      variables: route.queryVariables,
    });
  }
};

const CategoriesComponent: FunctionComponent<RouteComponentProps> = ({
  location: { pathname },
}) => {
  const categories = routes
    .filter((route) => route.path && route.path.startsWith("/katagorier/"))
    .map((route) => {
      let className = "";
      if (pathname.includes(route.path)) {
        className = "selected";
      }
      return (
        <div key={route.id}>
          <ApolloConsumer>
            {(client) => (
              <Category
                to={route.path}
                onMouseOver={() => preload(route, client)}
                className={className}
              >
                {route.id}
              </Category>
            )}
          </ApolloConsumer>
        </div>
      );
    });

  return <>{categories}</>;
};

export default withRouter(CategoriesComponent);

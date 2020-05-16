import React, { FunctionComponent } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { ApolloConsumer } from "react-apollo";
import { Category } from "./styles";
import routes from "lib/routes";
import queryForPage from "lib/queryForPage";
import preloadQuery from "lib/preloadQuery";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const CategoriesComponent: FunctionComponent<RouteComponentProps> = ({
  location: { pathname },
}) => {
  const categories = routes
    .filter((route) => route.path && route.path.startsWith("/katagorier/"))
    .map((route) => {
      let className = "";
      if (route.path && pathname.includes(route.path)) {
        className = "selected";
      }
      const { query, variables } = queryForPage(route.id);
      return (
        <div key={route.id}>
          <ApolloConsumer>
            {(client) => (
              <Category
                to={route.path || "/"}
                onClick={() => scrollToTop()}
                onMouseOver={() => preloadQuery({ query, variables, client })}
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

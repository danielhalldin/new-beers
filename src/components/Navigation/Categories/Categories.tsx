import React from "react";
import { useLocation } from "react-router-dom";
import { ApolloConsumer } from "@apollo/client";
import { Category } from "./styles";
import routes from "lib/routes";
import queryForPage from "lib/queryForPage";
import preloadQuery from "lib/preloadQuery";
import { useQuery } from "@apollo/client";
import { stock } from "queries";
import { Stock as stockType } from "types/Stock";

const CategoriesComponent = () => {
  const { loading, error, data } = useQuery(stock);
  const { pathname } = useLocation();

  // CHECK WHEN RESOLVED https://github.com/apollographql/apollo-client/issues/6334 (&& !data)
  if (loading && !data) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>error</div>;
  }

  const categories = data.systembolagetStock.map((stock: stockType) => {
    const route = routes.find((route) => route.id === stock.name);
    if (!route) {
      return null;
    }
    let className = "";
    if (route.path && pathname.includes(route.path)) {
      className = "selected";
    }
    const { query, variables } = queryForPage(route.id);
    return (
      <div key={stock.name}>
        <ApolloConsumer>
          {(client) => (
            <Category
              to={route.path || "/"}
              onMouseOver={() => preloadQuery({ query, variables, client })}
              className={className}
            >
              {stock.name}
              <div className="info">
                {stock.nrOfBeers} st, {stock.nextRelease}
              </div>
            </Category>
          )}
        </ApolloConsumer>
      </div>
    );
  });

  return <>{categories}</>;
};

export default CategoriesComponent;

import React from "react";
import { useLocation } from "react-router-dom";
import { useApolloClient } from "@apollo/client";
import { Category } from "./styles";
import routes from "lib/routes";
import queryForPage from "lib/queryForPage";
import preloadQuery from "lib/preloadQuery";
import { useStockQuery } from "common/generated/generated";

const CategoriesComponent = () => {
  const client = useApolloClient();
  const { loading, error, data } = useStockQuery({ errorPolicy: "all" });
  const { pathname } = useLocation();

  // CHECK WHEN RESOLVED https://github.com/apollographql/apollo-client/issues/6334 (&& !data)
  if (loading && !data) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>error</div>;
  }

  const categories =
    data &&
    data.systembolagetStock.map((stock) => {
      const stockName = stock?.name;
      const nrOfBeers = stock?.nrOfBeers;
      const nextRelease = stock?.nextRelease;
      const route = routes.find((route) => route.id === stockName);
      if (!route) {
        return null;
      }
      let className = "";
      if (route.path && pathname.includes(route.path)) {
        className = "selected";
      }
      const { query, variables } = queryForPage(route.id);
      return (
        <div key={stockName}>
          <Category
            to={route.path || "/"}
            onMouseOver={() => preloadQuery({ query, variables, client })}
            className={className}
          >
            {stockName}
            <div className="info">
              {nrOfBeers} st, {nextRelease}
            </div>
          </Category>
        </div>
      );
    });

  return <>{categories}</>;
};

export default CategoriesComponent;

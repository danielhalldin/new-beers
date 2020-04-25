import React, { FunctionComponent } from "react";
import { CategoriesContainer, Category } from "./styles";
import routes from "../../lib/routes";

const Categories: FunctionComponent = () => {
  const categories = routes
    .filter((route) => route.path.startsWith("/katagorier/"))
    .map((route) => {
      return (
        <Category
          to={route.disabled ? window.location.pathname : route.path}
          key={route.id}
        >
          {route.id}
        </Category>
      );
    });
  return <CategoriesContainer id={"main"}>{categories}</CategoriesContainer>;
};

export default Categories;

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { ApolloConsumer } from "react-apollo";
import routes from "lib/routes";
import queryForPage from "lib/queryForPage";
import preloadQuery from "lib/preloadQuery";
import { Route as RouteType } from "types/Route";
import {
  Navigation,
  SubNavigation,
  LinkButton,
  Button,
  IconText,
} from "./styles";

const MenuComponent = () => {
  const { pathname } = useLocation();
  const NavigationItem = (route: RouteType) => {
    let className = "";
    if (route.path && pathname.includes(route.path)) {
      className = "selected";
    }
    const { query, variables } = queryForPage(route.id);
    return (
      <ApolloConsumer key={route.id}>
        {(client) => (
          <LinkButton
            onMouseOver={() => preloadQuery({ query, variables, client })}
            to={route.path || "/"}
            className={className}
          >
            {route.icon}
            <IconText>{route.id}</IconText>
          </LinkButton>
        )}
      </ApolloConsumer>
    );
  };

  const PopupMenuItem = (route: RouteType) => {
    const [submenuVisible, setSubmenuVisible] = useState("initial");
    let className = "";
    if (route.path && pathname.includes(route.path)) {
      className = "selected";
    }
    return (
      <>
        {submenuVisible !== "initial" && (
          <SubNavigation visible={submenuVisible}>
            {route.component}
          </SubNavigation>
        )}
        <Button
          onClick={() => {
            setSubmenuVisible(submenuVisible === "true" ? "false" : "true");
          }}
          className={className}
        >
          {route.icon}
          <IconText>{route.id}</IconText>
        </Button>
      </>
    );
  };

  const NavigationComponent = () => {
    const items = routes
      .filter((route) => !!route.menuIndex)
      .sort((a, b) => {
        return (a.menuIndex || 0) - (b.menuIndex || 0);
      })
      .map((route) => {
        if (!route.submenu) {
          return <NavigationItem key={route.id} {...route} />;
        } else {
          return <PopupMenuItem key={route.id} {...route} />;
        }
      });

    return <Navigation>{items}</Navigation>;
  };

  return <NavigationComponent />;
};

export default MenuComponent;

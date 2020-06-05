import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useApolloClient } from "@apollo/client";
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
import useOutsideClick from "hooks/useOutsideClick";
//import useScrolling from "hooks/useScrolling";

const MenuComponent = () => {
  const { pathname } = useLocation();
  // const [cssClass, setCssClass] = useState("visible");
  const cssClass = "visible";
  // useScrolling((visible: boolean) => {
  //   setCssClass(visible ? "visible" : "hidden");
  // });

  const NavigationItem = (route: RouteType) => {
    const client = useApolloClient();
    let className = "";
    if (route.path && pathname.includes(route.path)) {
      className = "selected";
    }
    const { query, variables } = queryForPage(route.id);
    return (
      <LinkButton
        onMouseOver={() => preloadQuery({ query, variables, client })}
        to={route.path || "/"}
        className={className}
      >
        {route.icon}
        <IconText>{route.id}</IconText>
      </LinkButton>
    );
  };

  const PopupMenuItem = (route: RouteType) => {
    const [submenuVisible, setSubmenuVisible] = useState("initial");
    const ref = useRef<HTMLInputElement>(null);

    useOutsideClick(ref, () => {
      submenuVisible === "true" && setSubmenuVisible("false");
    });

    let className = "";
    if (route.path && pathname.includes(route.path)) {
      className = "selected";
    }
    return (
      <>
        {submenuVisible !== "initial" && (
          <SubNavigation visible={submenuVisible} ref={ref}>
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
    return <Navigation className={cssClass}>{items}</Navigation>;
  };

  return <NavigationComponent />;
};

export default MenuComponent;

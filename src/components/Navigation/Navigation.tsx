import React, { useState, FunctionComponent } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
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

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const MenuComponent: FunctionComponent<RouteComponentProps> = ({
  location: { pathname },
}) => {
  const NavigationItem = (route: RouteType) => {
    let className = "";
    if (route.path && pathname.includes(route.path)) {
      className = "selected";
    }
    if (route.disabled) {
      className = "disabled";
    }
    const { query, variables } = queryForPage(route.id);
    return (
      <ApolloConsumer key={route.id}>
        {(client) => (
          <LinkButton
            onClick={() => scrollToTop()}
            onMouseOver={() => preloadQuery({ query, variables, client })}
            to={route.disabled ? pathname : route.path || "/"}
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
    if (route.disabled) {
      className = "disabled";
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

export default withRouter(MenuComponent);

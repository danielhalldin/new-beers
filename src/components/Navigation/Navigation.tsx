import React from "react";
import routes from "../../lib/routes";
import { Navigation, Button, Icon, IconText } from "./styles";

const MenuComponent = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navigationItems = routes
    .filter((route) => route.menuIndex > -1)
    .sort((a, b) => (a.menuIndex <= b.menuIndex ? 1 : 0))
    .map((route) => {
      let className = "";
      if (window.location.pathname.includes(route.path)) {
        className = "selected";
      }
      if (route.disabled) {
        className = "disabled";
      }
      return (
        <Button
          onClick={() => scrollToTop()}
          to={route.disabled ? window.location.pathname : route.path}
          className={className}
          key={route.id}
        >
          <Icon src={route.icon} alt={route.id} />
          <IconText>{route.id}</IconText>
        </Button>
      );
    });

  return <Navigation>{navigationItems}</Navigation>;
};

export default MenuComponent;

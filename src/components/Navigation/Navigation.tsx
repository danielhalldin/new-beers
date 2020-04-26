import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { ApolloConsumer } from "react-apollo";
import routes from "../../lib/routes";
import { Navigation, Button, Icon, IconText } from "./styles";

const MenuComponent = ({ location: { pathname } }: RouteComponentProps) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const NavigationComponent = (client: any) => {
    const items = routes
      .filter((route) => route.menuIndex > -1)
      .sort((a, b) => (a.menuIndex <= b.menuIndex ? 1 : 0))
      .map((route) => {
        let className = "";
        if (pathname.includes(route.path)) {
          className = "selected";
        }
        if (route.disabled) {
          className = "disabled";
        }
        return (
          <ApolloConsumer key={route.id}>
            {(client) => (
              <Button
                onClick={() => scrollToTop()}
                onMouseOver={() => {
                  if (route.query) {
                    client.query({
                      query: route.query,
                      variables: route.queryVariables,
                    });
                  }
                }}
                to={route.disabled ? pathname : route.path}
                className={className}
              >
                <Icon src={route.icon} alt={route.id} />
                <IconText>{route.id}</IconText>
              </Button>
            )}
          </ApolloConsumer>
        );
      });

    return <Navigation>{items}</Navigation>;
  };

  return <NavigationComponent />;
};

export default withRouter(MenuComponent);

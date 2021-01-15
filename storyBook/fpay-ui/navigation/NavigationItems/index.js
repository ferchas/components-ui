import React from "react";
import classes from "./NavigationItems.module.scss";
import NavigationItem from "./NavigationItem";
import { useLocation } from "react-router-dom";

const NavigationItems = ({ expanded, drawerToggle, routes }) => {
  const location = useLocation();

  return (
    <ul className={classes.NavigationItems}>
      {routes && routes.map((route) => (
        <NavigationItem
          path={route.path}
          expanded={expanded}
          config={route.nav}
          active={location.pathname === route.path}
          drawerToggle={drawerToggle}
        />
      ))}
    </ul>
  );
};

export default NavigationItems;

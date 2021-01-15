import React from "react";
import classes from "./Toolbar.module.scss";
import DrawerToggle from "../SideDrawer/DrawerToggle";

const Toolbar = ({ drawerToggleClicked, title }) => {
  return (
    <header className={classes.Toolbar}>
      <div className={classes.Toolbar_drawerToggle}>
        <DrawerToggle
          clicked={drawerToggleClicked}
          image="/images/ic_menu_24.svg"
        />
      </div>
      <div className={classes.Toolbar_title}>{title}</div>
    </header>
  );
};

export default Toolbar;

import React from "react";
import Logo from "../Logo";
import NavigationItems from "../NavigationItems";
import classes from "./SideDrawer.module.scss";
import DrawerToggle from "./DrawerToggle";
import Backdrop from "../Backdrop";

const SideDrawer = ({ open, drawerToggleClicked, routes }) => {
  const sideDrawerClasses = [classes.SideDrawer];
  const sideDrawerExpandedClass = open
    ? classes.SideDrawer___expanded
    : classes.SideDrawer___collapsed;
  sideDrawerClasses.push(sideDrawerExpandedClass);
  return (
    <>
      <Backdrop
        show={open}
        clicked={drawerToggleClicked}
        className={classes.Backdrop}
      />
      <div className={sideDrawerClasses.join(" ")}>
        <div className={classes.SideDrawer_header}>
          <div className={classes.SideDrawer_header_drawerToggle}>
            <DrawerToggle clicked={drawerToggleClicked} expanded={open} />
          </div>
          <div className={classes.SideDrawer_header_logo}>
            <Logo />
          </div>
        </div>
        <nav className={classes.SideDrawer_nav}>
          <NavigationItems expanded={open} drawerToggle={drawerToggleClicked} routes={routes}/>
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;

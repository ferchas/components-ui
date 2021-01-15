import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import classes from "./NavigationItem.module.scss";

const NavigationItem = ({
  path,
  expanded,
  drawerToggle,
  active,
  config: { icon, submenu, text },
}) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const navigationItemClasses = [classes.NavigationItem];
  const expandedClass = !expanded ? classes.NavigationItem___collapsed : "";
  const activeClass = active ? classes.NavigationItem___active : "";
  const openClass = submenuOpen ? classes.NavigationItem___open : "";
  navigationItemClasses.push(expandedClass, activeClass, openClass);

  const toggleSubmenu = () => {
    if (!submenu) return;
    if (expanded) {
      setSubmenuOpen((prevState) => !prevState);
    } else {
      drawerToggle();
      setSubmenuOpen(true);
    }
  };

  const Item = (
    <li className={navigationItemClasses.join(" ")} onClick={toggleSubmenu}>
      <div className={classes.NavigationItem_menu}>
        <img
          className={classes.NavigationItem_menu_image}
          src={`/images/${icon}`}
          alt={text}
        />
        <div className={classes.NavigationItem_menu_text}>{text}</div>
        {submenu && expanded && (
          <img
            className={classes.NavigationItem_menu_arrow}
            src="/images/ic_down_filter.svg"
            style={{ marginLeft: "auto" }}
          />
        )}
      </div>
      {submenuOpen && (
        <div className={classes.NavigationItem_submenu}>
          {submenu && [
            ...submenu.map((value) => (
              <a
                className={classes.NavigationItem_submenu_item}
                href={value.url}
                target="_blank"
              >
                {value.text}
              </a>
            )),
          ]}
        </div>
      )}
    </li>
  );

  return (
    <>
      {!submenu ? (
        <Link to={path} className={classes.Link}>
          {Item}
        </Link>
      ) : (
        Item
      )}
    </>
  );
};

export default NavigationItem;

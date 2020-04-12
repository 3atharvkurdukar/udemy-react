import React from "react";
import classes from "./Toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import MenuIcon from "../SideDrawer/DrawerToggle/DrawerToggle";
import propTypes from "prop-types";

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <MenuIcon openDrawer={props.opened} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems isAuth={props.isAuth} />
      </nav>
    </header>
  );
};

toolbar.propTypes = {
  opened: propTypes.func,
};

export default toolbar;

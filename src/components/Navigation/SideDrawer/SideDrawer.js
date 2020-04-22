import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Logo from "../../Logo/Logo";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliary";
import propTypes from "prop-types";

const sideDrawer = (props) => {
  let attachedClasses = [
    classes.SideDrawer,
    props.open ? classes.Open : classes.Close,
  ];

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")} onClick={props.closed}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuth={props.isAuth} />
        </nav>
      </div>
    </Aux>
  );
};

sideDrawer.propTypes = {
  open: propTypes.bool,
  closed: propTypes.func,
};

export default sideDrawer;

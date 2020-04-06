import React from "react";
import classes from "./NavigationItem.module.css";
import propTypes from "prop-types";
import { NavLink } from "react-router-dom";

const navigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <NavLink
        exact={props.exact}
        to={props.link}
        activeClassName={classes.active}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

navigationItem.propTypes = {
  active: propTypes.bool,
};

export default navigationItem;

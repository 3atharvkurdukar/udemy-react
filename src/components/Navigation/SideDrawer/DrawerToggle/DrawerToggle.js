import React from 'react';
import classes from './DrawerToggle.module.css';
import propTypes from 'prop-types';

const drawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.openDrawer}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

drawerToggle.propTypes = {
    openDrawer: propTypes.func
};

export default drawerToggle;

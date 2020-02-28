import React from 'react';
import classes from './NavigationItem.module.css';
import propTypes from 'prop-types';

const navigationItem = (props) => {
    return (
        <li className={classes.NavigationItem}>
            <a href={props.link} className={props.active ? classes.active : null }>
                {props.children}
            </a>
        </li>
    );
};

navigationItem.propTypes = {
    active: propTypes.bool
};

export default navigationItem;

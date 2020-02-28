import React from 'react';
import classes from './Backdrop.module.css';
import propTypes from 'prop-types';

const backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

backdrop.propTypes = {
    clicked: propTypes.func
};

export default backdrop;

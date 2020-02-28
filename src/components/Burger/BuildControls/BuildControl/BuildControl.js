import React from 'react';
import classes from './BuildControl.module.css';
import propTypes from 'prop-types';

const buildControl = (props) => (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less} onClick={props.removed} disabled={props.disabled}>-</button>
            <button className={classes.More} onClick={props.added}>+</button>
        </div>
);

buildControl.propTypes = {
    label: propTypes.string,
    removed: propTypes.func,
    added: propTypes.func
};

export default buildControl;

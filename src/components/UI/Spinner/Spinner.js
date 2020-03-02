import React from 'react';
import classes from './Spinner.module.css';


const spinner = (props) => (
    <div className={classes.Spinner}>
        <div className={classes.Bounce1}></div>
        <div className={classes.Bounce2}></div>
    </div>
);

export default spinner;

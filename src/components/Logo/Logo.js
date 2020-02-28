import React from 'react';
import classes from './Logo.module.css';
import burgerLogo from '../../assets/images/burger-logo.png';

const logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={burgerLogo} alt='Burger'></img>
        </div>
    );
}

export default logo;

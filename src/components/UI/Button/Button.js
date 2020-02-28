import React from 'react'
import classes from './Button.module.css';
import propTypes from 'prop-types';

const button = (props) => {
    return (
        <button className={[classes.Button, classes[props.buttonType]].join(' ')} onClick={props.clicked}>{ props.children }</button>
    );
}

button.propTypes = {
    buttonType: propTypes.string.isRequired,
    clicked: propTypes.func
};

export default button;

import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary'
import Backdrop from '../Backdrop/Backdrop';
import propTypes from 'prop-types';

const modal = (props) => {
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div className={classes.Modal} style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
                { props.children }
            </div>
        </Aux>
    );
}

modal.propTypes = {
    show: propTypes.bool,
    modalClosed: propTypes.func
};

export default modal;

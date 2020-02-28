import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';
import propTypes from 'prop-types';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map((igKey) => (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}: </span> {props.ingredients[igKey]}
            </li>)
        );
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>
                { ingredientSummary }
            </ul>
            <p>Price: <strong>₹{props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button clicked={props.cancelOrder} buttonType='Danger'>CANCEL</Button>
            <Button clicked={props.confirmOrder} buttonType='Success'>CONTINUE</Button>
        </Aux>
    );
}

orderSummary.propTypes = {
    ingredients: propTypes.object,
    price: propTypes.number,
    cancelOrder: propTypes.func,
    confirmOrder: propTypes.func
};

export default orderSummary;

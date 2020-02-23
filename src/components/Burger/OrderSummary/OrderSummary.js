import React from 'react';
import Aux from '../../../hoc/Auxiliary';

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
        </Aux>
    );
}

export default orderSummary;

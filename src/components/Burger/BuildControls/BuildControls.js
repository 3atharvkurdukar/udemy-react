import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
import propTypes from "prop-types";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>₹{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((control) => (
      <BuildControl
        key={control.label}
        label={control.label}
        added={() => props.ingredientAdded(control.type)}
        removed={() => props.ingredientRemoved(control.type)}
        disabled={props.disabled[control.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      {props.isAuth ? "ORDER NOW" : "SIGN UP TO ORDER"}
    </button>
  </div>
);

buildControls.propTypes = {
  price: propTypes.number,
  ingredientAdded: propTypes.func,
  ingredientRemoved: propTypes.func,
  disabled: propTypes.object,
  purchasable: propTypes.bool,
  ordered: propTypes.func,
  isAuth: propTypes.bool,
};

export default buildControls;

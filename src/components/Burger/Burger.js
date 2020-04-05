import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import propTypes from "prop-types";

const burger = (props) => {
  let transformedIngredients = null;
  if (Object.keys(props.ingredients).length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  } else {
    transformedIngredients = Object.keys(props.ingredients)
      .map((igKey) => {
        return [...Array(props.ingredients[igKey])].map((_, i) => (
          <BurgerIngredient key={igKey + i} type={igKey} />
        ));
      })
      .reduce((arr, el) => arr.concat(el));
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

burger.propTypes = {
  ingredients: propTypes.object,
};

export default burger;

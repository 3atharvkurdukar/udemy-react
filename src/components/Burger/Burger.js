import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => (
    <div className={classes.Burger}>
        <BurgerIngredient type='bread-top' />
        <BurgerIngredient type='cheese' />
        <BurgerIngredient type='meat' />
        <BurgerIngredient type='salad' />
        <BurgerIngredient type='bread-bottom' />
    </div>
);

export default burger;

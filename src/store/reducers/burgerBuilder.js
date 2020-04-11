import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const INGREDIENT_PRICES = {
  salad: 10,
  cheese: 15,
  meat: 40,
  bacon: 20,
  bread: 10,
};

const initialState = {
  ingredients: null,
  totalPrice: INGREDIENT_PRICES["bread"],
  error: false,
};

const burgerBuilderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return updateObject(state, {
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
      });
    case actionTypes.REMOVE_INGREDIENT:
      return updateObject(state, {
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
      });
    case actionTypes.SET_INGREDIENTS:
      return updateObject(state, {
        ingredients: action.ingredients,
        totalPrice: Object.keys(action.ingredients)
          .map((igKey) => action.ingredients[igKey])
          .reduce((sum, el) => {
            return sum + el;
          }, INGREDIENT_PRICES["bread"]),
        error: false,
      });
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return updateObject(state, {
        error: true,
      });
    default:
      return state;
  }
};

export default burgerBuilderReducer;

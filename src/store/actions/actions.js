const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD = "ADD";
const SUBTRACT = "SUBTRACT";
const STORE_RESULT = "STORE_RESULT";
const DELETE_RESULT = "DELETE_RESULT";

const increment = () => {
  return {
    type: INCREMENT,
  };
};

const decrement = () => {
  return {
    type: DECREMENT,
  };
};

const add = (value) => {
  return {
    type: ADD,
    value,
  };
};

const subtract = (value) => {
  return {
    type: SUBTRACT,
    value,
  };
};

const storeResult = (result) => {
  return {
    type: STORE_RESULT,
    result,
  };
};

const storeResultAsync = (result) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(storeResult(result));
    }, 2000);
  };
};

const deleteResult = (resultId) => {
  return {
    type: DELETE_RESULT,
    resultId,
  };
};

export const actionTypes = {
  INCREMENT,
  DECREMENT,
  ADD,
  SUBTRACT,
  STORE_RESULT,
  DELETE_RESULT,
};

export const actionCreators = {
  increment,
  decrement,
  add,
  subtract,
  storeResult,
  storeResultAsync,
  deleteResult,
};

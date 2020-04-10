import actionTypes from "./actionTypes";

export const storeResult = (result) => {
  return {
    type: actionTypes.STORE_RESULT,
    result,
  };
};

export const storeResultAsync = (result) => {
  return (dispatch, getState) => {
    console.log(getState());
    setTimeout(() => {
      dispatch(storeResult(result));
    }, 2000);
  };
};

export const deleteResult = (resultId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultId,
  };
};

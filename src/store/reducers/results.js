import { actionTypes } from "../actions/actions";

const initialState = {
  results: [],
};

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: action.result,
        }),
      };
    case actionTypes.DELETE_RESULT:
      const newResults = state.results.filter(
        (result) => action.resultId !== result.id
      );
      return {
        ...state,
        results: newResults,
      };
    default:
      return state;
  }
};
export default resultsReducer;

import { FETCH_SUCCESS_ACTION, FETCH_FAILED_ACTION } from "./action";

const initialState = {
  details: {},
  error: null,
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS_ACTION:
      console.log("FETCH_SUCCESS_ACTION", action);
      return { ...state, details: action.data, error: null };
    case FETCH_FAILED_ACTION:
      console.log("FETCH_FAILED_ACTION", action);
      return { ...state, error: action.data.status + " " + action.data.statusText };
    default:
      return state;
  }
};

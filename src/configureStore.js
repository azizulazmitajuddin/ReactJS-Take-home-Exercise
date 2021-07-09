import { createStore, combineReducers } from "redux";
import { homeReducer } from "./container/Home/reducer";

const rootReducer = combineReducers({
  home: homeReducer,
});

export default createStore((state, action) => rootReducer(state, action));

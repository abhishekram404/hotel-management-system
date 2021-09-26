import { combineReducers } from "redux";
import allReducers from "./allReducers";

const rootReducer = combineReducers({
  all: allReducers,
});

export default rootReducer;

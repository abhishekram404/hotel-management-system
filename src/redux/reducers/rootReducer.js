import { combineReducers } from "redux";
import orderReducer from "./orderReducer";
import roomReducer from "./roomReducer";

const rootReducer = combineReducers({
  room: roomReducer,
  order: orderReducer,
});

export default rootReducer;

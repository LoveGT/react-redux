import { applyMiddleware, combineReducers, createStore } from "redux";

import tabbarReducer from "./reducers/tabbarReducer";
import cityReducer from "./reducers/cityReducer";
import cinemaListReducer from "./reducers/cinemaListReducer";

import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";
// reducer合并
const reducer = combineReducers({
  tabbarReducer,
  cityReducer,
  cinemaListReducer,
});
const store = createStore(reducer, applyMiddleware(reduxThunk, reduxPromise));

export default store;

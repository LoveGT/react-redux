import { applyMiddleware, combineReducers, createStore, compose } from "redux";

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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(reduxThunk, reduxPromise))
);

export default store;

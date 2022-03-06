import { combineReducers, createStore } from "redux";

import tabbarReducer from "./reducers/tabbarReducer";
import cityReducer from "./reducers/cityReducer";

// reducer合并
const reducer = combineReducers({ tabbarReducer, cityReducer });
const store = createStore(reducer);

export default store;

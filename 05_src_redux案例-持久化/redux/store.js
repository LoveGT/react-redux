import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";
// redux持久化操作
import { persistStore, persistReducer } from "redux-persist";
import  storage  from  'redux-persist/lib/storage'
// 导入分包reducer
import tabbarReducer from "./reducers/tabbarReducer";
import cityReducer from "./reducers/cityReducer";
import cinemaListReducer from "./reducers/cinemaListReducer";
// redux-persist配置
const persistConfig = {
  key: "gaotao",
  storage,
  whitelist: ['cityReducer']
};
// reducer合并
const reducer = combineReducers({
  tabbarReducer,
  cityReducer,
  cinemaListReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(reduxThunk, reduxPromise))
);
const persistor = persistStore(store);

export { store, persistor };

// export default store;

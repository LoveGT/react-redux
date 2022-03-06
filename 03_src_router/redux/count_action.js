import { INCREMENT, DECREMENT } from "./constant";

export const createIncrementAction = (data) => {
  //同步aciton
  return { type: INCREMENT, data };
};
export const createDecrementAction = (data) => {
  //同步aciton
  return { type: DECREMENT, data };
};
//异步action: 返回一个函数的action
export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data));
    }, time);
  };
};

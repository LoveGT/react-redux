import React, { Component } from "react";
// 引入store，用于获取redux中保存状态
import store from "../../redux/store";
// 引入actionCreator,专门用于创建action对象
import {createDecrementAction, createIncrementAction} from '../../redux/count_action'

export default class Count extends Component {
  state = {};
  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({});
  //   });
  // }
  increment = () => {
    const { value } = this.selectRef;
    store.dispatch(createIncrementAction(value*1));
  };
  decrement = () => {
    const { value } = this.selectRef;
    store.dispatch(createDecrementAction(value*1));
  };
  incrementOdd = () => {
    const { value } = this.selectRef;
    const count = store.getState();
    if (count % 2 !== 0) {
      store.dispatch(createIncrementAction(value*1));
    }
  };
  incrementAsync = () => {
    const { value } = this.selectRef;
    setTimeout(() => {
      store.dispatch(createIncrementAction(value*1));
    }, 500);
  };
  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
        <select
          style={{ marginRight: "20px" }}
          ref={(c) => (this.selectRef = c)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementOdd}>当前求和为奇数再加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    );
  }
}

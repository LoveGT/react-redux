import React, { Component } from "react";

export default class Count extends Component {
  state = {};
  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({});
  //   });
  // }
  increment = () => {
    const { value } = this.selectRef;
  };
  decrement = () => {
    const { value } = this.selectRef;
  };
  incrementOdd = () => {
    const { value } = this.selectRef;
  };
  incrementAsync = () => {
    const { value } = this.selectRef;
    // setTimeout(() => {
    // }, 500);
  };
  render() {
    return (
      <div>
        <h1>当前求和为：？？？？</h1>
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

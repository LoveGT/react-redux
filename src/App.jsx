import React from "react";
import { connect } from "react-redux";
import Tabbar from './components/Tabbar'
import IndexRouter from "./router/IndexRouter";

import "./App.css";

function App(props) {
  return (
    <div className="app">
      <IndexRouter>{props.isShow && <Tabbar></Tabbar>}</IndexRouter>
    </div>
  );
}

export default connect((state) => {
  // console.log(state, 'state')
  return {
    isShow: state.tabbarReducer.show,
  };
})(App);

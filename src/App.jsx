import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import store from "./redux/store";
import TabBar from "./components/TabBar";
import IndexRouter from "./router/IndexRouter";

import "./App.css";

function App(props) {
  // const [show, setShow] = useState(true);
  // useEffect(() => {
  //   // console.log(store.getState(), 'store.getState()')
  //   store.subscribe(() => {
  //     setShow(store.getState().tabbarReducer.show);
  //   });
  // }, []);
  return (
    <div className="app">
      <IndexRouter>{props.isShow && <TabBar></TabBar>}</IndexRouter>
    </div>
  );
}

export default connect((state) => {
  // console.log(state, 'state')
  return {
    isShow: state.tabbarReducer.show,
  };
})(App);

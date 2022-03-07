import React, { useEffect,useState } from "react";
import store from "./redux/store";
import TabBar from "./components/TabBar";
import IndexRouter from "./router/IndexRouter";

import "./App.css";

function App() {
  const [show, setShow] = useState(true)
  useEffect(() => {
    // console.log(store.getState(), 'store.getState()')
    store.subscribe(() => {
      setShow(store.getState().tabbarReducer.show)
    })
  }, [])
  return (
    <div className="app">
      <IndexRouter>
        {show && <TabBar></TabBar>}
      </IndexRouter>
    </div>
  );
}

export default App;

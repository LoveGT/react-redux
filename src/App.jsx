import React from "react";

import TabBar from "./components/TabBar";
import IndexRouter from "./router/IndexRouter";

import './App.css'

function App() {
  return (
    <div>
      <IndexRouter><TabBar></TabBar></IndexRouter>
      
    </div>
  );
}

export default App;

import React from "react";
import { Button } from "antd";
import "antd/dist/antd.css";

const App = () => {
  const handleChange = () => {
    console.log(1111)
  }
  return (
    <div>
      <Button type="primary" size="small" onClick={handleChange}>Primary Button</Button>
    </div>
  );
};

export default App;

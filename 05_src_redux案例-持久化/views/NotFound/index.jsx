import React from "react";
import { useEffect } from "react";

function NotFound(props) {
  useEffect(() => {
    console.log(props);
  }, [props]);
  return <div>NotFound.....</div>;
}

// 封装高阶函数(渲染劫持,组件复用，增添属性)
function customConnect(callback, obj) {
  const value = callback();
  return (MyComponent) => {
    return (props) => {
      return (
        <div style={{ color: "red" }}>
          <MyComponent {...value} {...props} {...obj}></MyComponent>
        </div>
      );
    };
  };
}
export default customConnect(
  () => {
    return {
      a: 1,
      b: 2,
    };
  },
  { fa() {}, fb() {} }
)(NotFound);

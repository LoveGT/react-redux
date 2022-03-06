import React from "react";
import { useState } from "react";
import store from "../../redux/store";

export default function City(props) {
  const [list] = useState(["北京", "上海", "深圳", "广州"]);
  const handleChangeCity = (city) => {
    return () => {
      store.dispatch({
        type: "change-city",
        payload: city,
      });
      props.history.push("/cinemas");
    };
  };
  return (
    <div>
      {list.map((item, index) => {
        return (
          <div key={index} onClick={handleChangeCity(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
}

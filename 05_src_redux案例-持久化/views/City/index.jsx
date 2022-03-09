import React from "react";
import { useState } from "react";
import { connect } from "react-redux";

 function City(props) {
  const [list] = useState(["北京", "上海", "深圳", "广州"]);
  const handleChangeCity = (city) => {
    return () => {
      props.change(city)
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

export default connect(null,{
  change(city) {
    return {
      type: "change-city",
        payload: city,
    }
  }
})(City)
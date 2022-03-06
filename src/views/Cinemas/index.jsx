import React, { useEffect, useState } from "react";
import store from "../../redux/store";

export default function Cinemas(props) {
  console.log(props, "props");
  const [cityName, setCityName] = useState("北京");

  useEffect(() => {
    setCityName(store.getState().cityReducer.city);
  }, []);

  const handleToCity = () => {
    props.history.push("/city");
  };
  return (
    <div>
      <div className="city" onClick={handleToCity}>
        {cityName}
      </div>
      <div>cinemas</div>
    </div>
  );
}

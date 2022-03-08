import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getCinemaListAction } from "../../redux/actionCreator/getCinemaListAction";

import "./index.css";

function Cinemas(props) {
  console.log(props, "props");
  const {cinemaList, cityName, getCinemaListAction, history} = props
  useEffect(() => {
    if (cinemaList.length === 0) {
      // 去后台拿数据
      // actionCreator里写异步
      getCinemaListAction();
    } else {
      console.log("store缓存");
    }
  }, [cinemaList, getCinemaListAction]);

  const handleToCity = () => {
    history.push("/city");
  };

  const handleSearch = () => {
    history.push("/cinemas/search");
  };
  return (
    <div>
      <div className="topbar">
        <div className="cinemas" onClick={handleToCity}>
          {cityName}
        </div>
        <div className="search" onClick={handleSearch}>
          搜索
        </div>
      </div>
      <ul className="cinemas-list">
        {cinemaList.map((item) => {
          return (
            <li key={item.cinemaId}>
              {item.name}
              <span>{item.address}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
//将要传给子组件的state映射成属性
const mapStateToProps = (state) => {
  return {
    cityName: state.cityReducer.city,
    cinemaList: state.cinemaListReducer.cinemaList,
  };
};

//将要传给子组件的回调函数映射成属性
const mapDisPatchToProps = {
  getCinemaListAction
};

export default connect(mapStateToProps, mapDisPatchToProps)(Cinemas);

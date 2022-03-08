import React, { useEffect, useState } from "react";
import store from "../../redux/store";

import { getCinemaListAction } from "../../redux/actionCreator/getCinemaListAction";

import "./index.css";

export default function Cinemas(props) {
  console.log(props, 'props')
  // const [cityName, setCityName] = useState("北京");
  const [cityName] = useState(store.getState().cityReducer.city);

  const [cinemaList, setCinemaList] = useState(
    store.getState().cinemaListReducer.cinemaList
  );

  useEffect(() => {
    if (store.getState().cinemaListReducer.cinemaList.length === 0) {
      // 去后台拿数据
      // actionCreator里写异步
      store.dispatch(getCinemaListAction());
    } else {
      console.log("store缓存");
    }

    // 订阅
    let unSubscribe = store.subscribe(() => {
      setCinemaList(store.getState().cinemaListReducer.cinemaList);
    });
    return () => {
      //取消订阅
      unSubscribe();
    };
  }, []);

  const handleToCity = () => {
    props.history.push("/city");
  };

  const handleSearch = () => {
    props.history.push('/cinemas/search')
  }
  return (
    <div>
      <div className="topbar">
        <div className="cinemas" onClick={handleToCity}>
          {cityName}
        </div>
        <div className="search" onClick={handleSearch}>搜索</div>
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

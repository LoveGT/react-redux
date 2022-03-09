import React from "react";
import { useEffect, useState, useMemo } from "react";
import {store} from "../../redux/store";

import { getCinemaListAction } from "../../redux/actionCreator/getCinemaListAction";

export default function Search() {
  const [cinemaList, setCinemaList] = useState(
    store.getState().cinemaListReducer.cinemaList
  );

  const [myText, setMyText] = useState("");

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
  const getCinemaList = useMemo(() =>
    cinemaList.filter(
      (item) =>
        item.name.toUpperCase().includes(myText.toUpperCase()) ||
        item.address.toUpperCase().includes(myText.toUpperCase())
    )
  );

  const handleChange = (evt) => {
    setMyText(evt.target.value);
  };
  return (
    <div className="search">
      <div className="topbar" style={{ justifyContent: "center" }}>
        <input
          type="text"
          value={myText}
          onChange={(evt) => handleChange(evt)}
        />
      </div>
      <ul className="cinemas-list">
        {getCinemaList.map((item) => {
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

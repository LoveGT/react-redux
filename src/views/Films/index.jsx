import React, { useState, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import axios from "axios";

import { Swiper, Tabs } from "antd-mobile";
import Nowplaying from "../../components/Nowplaying";
import Comingsoon from "../../components/Comingsoon";

import "./index.css";

export default function Films(props) {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    axios({
      url: "https://m.maizuo.com/gateway?type=2&cityId=440300&k=6214955",
      method: "GET",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.0","e":"16467997234512735022809089"}',
        "X-Host": "mall.cfg.common-banner",
      },
    }).then((res) => {
      setBanners(res.data.data);
    });
  }, []);
  //切换选项卡
  const handleChange = (path)=>{
    props.history.push(path)
  }
  return (
    <div className="films-box">
      <div className="swiper" style={{ height: "200px"}}>
        <Swiper height={200} loop>
          {banners.map((item) => (
            <Swiper.Item key={item.bannerId}>
              <img
                src={item.imgUrl}
                alt={item.name}
                style={{ width: "100%" }}
              />
            </Swiper.Item>
          ))}
        </Swiper>
      </div>
      <div className="navBar">
        <Tabs onChange={(key) =>handleChange(key)} activeKey={props.location.pathname}>
          <Tabs.Tab title="正在热映" key="/films/nowplaying">
          </Tabs.Tab>
          <Tabs.Tab title="即将上映" key="/films/comingsoon">
          </Tabs.Tab>
        </Tabs>
      </div>
      <Switch>
        <Route path="/films/nowplaying" component={Nowplaying}></Route>
        <Route path="/films/comingsoon" component={Comingsoon}></Route>
        <Redirect from="/films" to="/films/nowplaying"></Redirect>
      </Switch>
    </div>
  );
}

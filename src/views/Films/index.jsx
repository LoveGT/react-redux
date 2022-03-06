import React from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import './index.css'
import Nowplaying from "../../components/Nowplaying";
import Comingsoon from "../../components/Comingsoon";

export default function Films() {
  return (
    <div className="films-box">
      <div className="swiper" style={{ height: "200px", background: "yellow" }}>
        轮播区域
      </div>
      <div className="navBar">
          <NavLink to="/films/nowplaying" className="navItem">正在热映</NavLink>
          <NavLink to="/films/comingsoon" className="navItem">即将上映</NavLink>
      </div>
      <Switch>
        <Route path="/films/nowplaying" component={Nowplaying}></Route>
        <Route path="/films/comingsoon" component={Comingsoon}></Route>
        <Redirect from="/films" to="/films/nowplaying"></Redirect>
      </Switch>
    </div>
  );
}

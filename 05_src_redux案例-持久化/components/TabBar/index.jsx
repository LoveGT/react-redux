import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import style from '../../styles/tabbar.module.css'

export default function TabBar() {
  return (
    <ul className="tabBar">
      <li>
        <NavLink activeClassName={style.active}  to="/films">电影</NavLink>
      </li>
      <li>
        <NavLink to="/cinemas">影院</NavLink>
      </li>
      <li>
        <NavLink to="/center">我的</NavLink>
      </li>
    </ul>
  );
}

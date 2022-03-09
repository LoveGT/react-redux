import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";

import Films from "../../views/Films";
import Cineamas from "../../views/Cinemas";
import Center from "../../views/Center";
import FilmsDetail from "../../views/FilmsDetail";
import NotFound from "../../views/NotFound";
import Login from "../../views/Login";
import City from "../../views/City";
import Search from "../../views/Search";

import { isAuth } from "../../utils/auth";

export default function indexRouter(props) {
  return (
    <HashRouter>
      {props.children}
      <Switch>
        <Route path="/films" component={Films}></Route>
        <Route path="/cinemas" component={Cineamas} exact></Route>
        <Route path="/cinemas/Search" component={Search}></Route>
        <Route path="/city" component={City}></Route>
        
        {/* <Route path="/center" component={Center}></Route> */}
        <Route
          path="/center"
          render={() => {
            return isAuth(1) ? <Center /> : <Redirect to="/login"><Login /></Redirect>;
          }}
        ></Route>
        <Route path={`/login`} component={Login}></Route>
        {/* 动态路由传参-接受参数 */}
        {/* <Route path="/filmsDetail/:filmId" component={FilmsDetail}></Route> */}
        {/* query传参-接受参数 */}
        <Route path="/filmsDetail" component={FilmsDetail}></Route>

        <Redirect from="/" to="/films" exact></Redirect>

        <Route component={NotFound}></Route>
      </Switch>
    </HashRouter>
  );
}

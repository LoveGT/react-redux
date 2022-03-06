import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import FilmItem from "./FilmItem";

//将普通组件变成路由组件
const WithFilmItem = withRouter(FilmItem);

export default function Nowplaying(props) {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=565445",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.0","e":"16464956046582849129938945"}',
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then((res) => {
      setList(res.data.data.films);
    });
  }, []);

  // const history = useHistory()
  // const handleToDetail = (filmId) => {
  //   //动态路由传参
  //   // history.push('/filmsDetail/' + filmId)
  //   // query传参
  //   // history.push({pathname:'/filmsDetail', query: {filmId}})
  //   // state传参
  //   history.push({
  //     pathname: '/filmsDetail',
  //     state: {
  //       filmId
  //     }
  //   })
  // };

  return (
    <ul>
      {list.map((item) => (
        <WithFilmItem key={item.filmId} {...item}></WithFilmItem>
      ))}
    </ul>
  );
}

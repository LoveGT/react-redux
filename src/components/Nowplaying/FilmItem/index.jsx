import React from "react";
import { useHistory, withRouter } from "react-router-dom";

function FilmItem(props) {
  const history = useHistory();
  let { name, filmId } = props;
  const handleToDetail = () => {
    history.push({
      pathname: "/filmsDetail",
      state: {
        filmId,
      },
    });
  };
  return <li onClick={() => handleToDetail(filmId)}>{name}</li>;
}
//将普通组件变成路由组件
export default withRouter(FilmItem);

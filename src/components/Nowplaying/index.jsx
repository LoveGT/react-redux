import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import { List, Image, InfiniteScroll } from "antd-mobile";

export default function Nowplaying(props) {
  const [list, setList] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  let pageNum = useRef(0);
  // useEffect(() => {
  //   axios({
  //     url: `https://m.maizuo.com/gateway?cityId=110100&pageNum=${pageNum.current}&pageSize=10&type=1&k=565445`,
  //     headers: {
  //       "X-Client-Info":
  //         '{"a":"3000","ch":"1002","v":"5.2.0","e":"16464956046582849129938945"}',
  //       "X-Host": "mall.film-ticket.film.list",
  //     },
  //   }).then((res) => {
  //     setList(res.data.data.films);
  //   });
  // }, []);

  const loadMore = () => {
    pageNum.current++;
    setHasMore(false);
    axios({
      url: `https://m.maizuo.com/gateway?cityId=110100&pageNum=${pageNum.current}&pageSize=10&type=1&k=565445`,
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.0","e":"16464956046582849129938945"}',
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then((res) => {
      setList([...list, ...res.data.data.films]);
      setHasMore(res.data.data.films.length > 0);
    });
  };
  const handleClick = (filmId) => {
    return () => {
      props.history.push({
        pathname: "/filmsDetail",
        state: {
          filmId,
        },
      });
    };
  };
  return (
    <div className="nowplaying">
      <List>
        {list.map((item) => (
          <List.Item
            key={item.filmId}
            onClick={handleClick(item.filmId)}
            prefix={
              <Image
                src={item.poster}
                // style={{ borderRadius: 20 }}
                // fit="cover"
                width={80}
                // height={40}
              />
            }
            description={
              <div>
                <div>观众评分：{item.grade ?? "暂无评分"}</div>
                <div>主演：{item.director}</div>
                <div>
                  {item.nation}
                  {item.runtime}分钟
                </div>
              </div>
            }
            key={item.filmId}
          >
            {item.name}
          </List.Item>
        ))}
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </div>
  );
}

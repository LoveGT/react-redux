import React from "react";
import { TabBar } from "antd-mobile";
import {
  AppOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";
import {withRouter} from "react-router-dom"

import style from "../../styles/tabbar.module.css"
import "./index.css";

function Tabbar(props) {
  const tabs = [
    {
      key: "/films",
      title: "电影",
      icon: <AppOutline />,
    },
    {
      key: "/cinemas",
      title: "影院",
      icon: <UnorderedListOutline />,
    },
    {
      key: "/center",
      title: "我的",
      icon: <UserOutline />,
    },
  ];
  const handleChange = (key) => {
    console.log(props.location.pathname,'props')
    props.history.push(key)
  }
  return (
    <TabBar className={style.tabbar} activeKey={'/' + props.location.pathname.split("/")[1]} onChange={(key) => handleChange(key)}>
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
}

export default withRouter(Tabbar)

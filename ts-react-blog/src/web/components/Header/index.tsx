import React, { memo, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import SearchInput from "../SearchInput/index";
import "./index.less";
import defaultLogo from "../../assets/images/logo.png";
import { Button, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

export type navType = {
  name: string;
  to: string;
  exact?: boolean | undefined;
};
export interface Iprops {
  navLinks: Array<navType>;
  [propsKey: string]: any;
}

function Header(props: Iprops) {
  const [isLogined, setLoginStatus]: [boolean, any] = useState(false);
  const history = useHistory();
  const userMenu = (
    <Menu>
      <Menu.Item>
        <a>个人信息</a>
      </Menu.Item>
      <Menu.Item>
        <a>我的发表</a>
      </Menu.Item>
    </Menu>
  );
  const toLoginPage = () => {
    history.push("/login");
  };
  return (
    <div className="blog-header ">
      <div className="blog-main-width">
        {props.logo || <img src={defaultLogo} className="logo" />}
        {props.navLinks && (
          <div className="blog-navi">
            {props.navLinks.map((item: navType, index: number) => {
              return (
                <div className="blog-navi-item" key={"item" + index}>
                  <NavLink {...item}>{item.name}</NavLink>
                </div>
              );
            })}
          </div>
        )}
        {props.search && <SearchInput placeholder="输入关键词搜索" />}
        {props.login}
        {isLogined ? (
          <div className="blog-logined">
            <Dropdown overlay={userMenu} placement="bottomRight">
              <div className="blog-user">
                个人中心
                <DownOutlined />
              </div>
            </Dropdown>
            <Button type="primary">写文章</Button>
          </div>
        ) : (
          <div className="blog-unlogined">
            <Button onClick={toLoginPage}>立即登录</Button>
            <Button type="primary">免费注册</Button>
          </div>
        )}
      </div>
    </div>
  );
}
export default memo(Header);

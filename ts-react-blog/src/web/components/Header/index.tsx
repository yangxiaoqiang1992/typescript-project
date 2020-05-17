import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import SearchInput from "../SearchInput/index";
import "./index.less";
import defaultLogo from "../../assets/images/logo.png";

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
      </div>
    </div>
  );
}
export default memo(Header);

import React, { memo, JSXElementConstructor } from "react";
import { withRouter, NavLink } from "react-router-dom";
import "./index.less";

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
    <div className="blog-header">
      {props.logo || <img src={require("../../assets/images/logo.png")} />}
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
      {props.search}
    </div>
  );
}
export default memo(Header);

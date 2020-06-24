import React, { memo } from "react";
import MenuItem, { MenuItemProps as ItemProps } from "./MenuItem";
import "./index.less";

export interface MenuProps {
  data?: Array<MenuItemProps>;
  children?: any;
}
const Menu = (props: MenuProps) => {
  return (
    <div className="blog-menu">
      {props.data &&
        props.data.map((item: MenuItemProps, index: number) => {
          return <MenuItem {...item} key={"item" + index}></MenuItem>;
        })}
      {!props.data && props.children}
    </div>
  );
};

Menu.Item = MenuItem;
export type MenuItemProps = ItemProps;
export { Menu as default };

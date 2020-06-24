import React, { memo } from "react";
import Menu, { MenuProps } from "./index";
export interface MenuGropProps extends MenuProps {
  title: string;
}
export default (props: MenuGropProps) => {
  const { title, ...others } = props;
  return (
    <div className="blog-menu-group">
      <h3>{props.title}</h3>
      <Menu {...others}></Menu>
    </div>
  );
};

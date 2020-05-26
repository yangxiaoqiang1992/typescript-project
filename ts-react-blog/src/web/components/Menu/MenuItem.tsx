import React, { memo } from "react";
export interface MenuItemProps {
  name: string;
  icon?: JSX.Element;
}
export default (props: MenuItemProps) => {
  return (
    <div className="blog-menu-item">
      {props.icon}
      <span>{props.name}</span>
    </div>
  );
};

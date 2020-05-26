import React, { memo } from "react";
import Menu from "./index";
export interface MenuGropProps {}
export default (props: MenuGropProps) => {
  return (
    <div className="blog-menu-group">
      <Menu></Menu>
    </div>
  );
};

import React, { memo, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import "./index.less";
import { Button } from "antd";

export interface InputProps {
  placeholder: string;
}
export default memo((props: InputProps) => {
  return (
    <div className="blog-search-input">
      <input placeholder={props.placeholder} />
      <Button icon={<SearchOutlined />}></Button>
    </div>
  );
});

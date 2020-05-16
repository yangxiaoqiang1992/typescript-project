import React, { memo } from "react";
import { Spin } from "antd";
import "./loading.less";

export interface LoadingProps {
  tip?: string;
  size?: "small" | "large" | "default" | undefined;
}
export default memo((props: LoadingProps) => {
  return (
    <div className="loading-container">
      <Spin size={props.size || "large"}></Spin>
    </div>
  );
});

import React, { memo } from "react";
import { Tag } from "antd";
import "./index.less";

export type tagType = {
  text: string;
  color?: string;
};
export interface tagsProps {
  title: string;
  data: Array<tagType>;
}
export default memo((props: tagsProps) => {
  return (
    <div className="blog-tags-box">
      <div className="title">{props.title}</div>
      <div className="blog-tabs-list">
        {props.data.length > 0 &&
          props.data.map((item: tagType, index: number) => {
            return (
              <Tag color={item.color} key={"item" + index}>
                {item.text}
              </Tag>
            );
          })}
      </div>
    </div>
  );
});

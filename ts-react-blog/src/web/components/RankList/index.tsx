import React, { memo } from "react";
import "./index.less";

export type rankListDataType = {
  avatorUrl: string;
  name: string;
  heat: number | string;
};
export interface rankListProps {
  title: string;
  data: Array<rankListDataType>;
}
export default memo((props: rankListProps) => {
  return (
    <div className="blog-rank-box">
      <div className="title">{props.title}</div>
      {props.data.length > 0 ? (
        <ol className="blog-rank-list">
          {props.data.map((item: rankListDataType, index: number) => {
            return (
              <li className="blog-rank-item" key={"item" + index}>
                <span className="index">{index + 1 + "."}</span>
                <img className="avator" src={item.avatorUrl} />
                <a className="author">{item.name}</a>
                <span className="heat">{item.heat}</span>
              </li>
            );
          })}
        </ol>
      ) : (
        ""
      )}
    </div>
  );
});

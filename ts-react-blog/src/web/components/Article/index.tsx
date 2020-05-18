import React from "react";
import ArticleItem, { ArticleItemProps } from "./ArticleItem";
import "./index.less";

export interface ArticleListProps {
  title: string | Array<string> | undefined;
  data?: ArticleItemProps[];
  children?: any;
}

const tabClickEvent = (e: any) => {
  console.log(e);
};
const ArticleList = (props: ArticleListProps) => {
  const header = Array.isArray(props.title) ? (
    <div className="blog-tab">
      {props.title?.map((item: string, index: number) => {
        return (
          <div
            className="blog-tab-item"
            key={"tab" + index}
            onClick={tabClickEvent}
          >
            {item}
          </div>
        );
      })}
    </div>
  ) : (
    props.title
  );
  return (
    <>
      {header}
      {(props.data &&
        props.data.map((item: ArticleItemProps) => {
          return <ArticleItem {...item} key={item.id} />;
        })) ||
        props.children}
    </>
  );
};
export { ArticleList as default };
ArticleList.Item = ArticleItem;

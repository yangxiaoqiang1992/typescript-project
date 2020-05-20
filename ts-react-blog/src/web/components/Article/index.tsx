import React, { useState } from "react";
import ArticleItem, { ArticleItemProps } from "./ArticleItem";
import "./index.less";

export interface ArticleListProps {
  title: string | Array<string> | undefined;
  data?: ArticleItemProps[];
  children?: any;
}

const ArticleList = (props: ArticleListProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const header = Array.isArray(props.title) ? (
    <div className="blog-tab">
      {props.title?.map((item: string, index: number) => {
        return (
          <div
            className={`blog-tab-item ${activeIndex == index ? "active" : ""}`}
            key={"tab" + index}
            onClick={() => setActiveIndex(index)}
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
      {props.data &&
        props.data.map((item: ArticleItemProps) => {
          return <ArticleItem {...item} key={item.id} />;
        })}
    </>
  );
};
export { ArticleList as default };
ArticleList.Item = ArticleItem;

//withRouter()  memo() useEffect useState

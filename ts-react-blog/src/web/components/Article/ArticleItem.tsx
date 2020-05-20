import React, { memo } from "react";
import Item from "antd/lib/list/Item";
export interface ArticleItemProps {
  id: string;
  title: string;
  content: string;
  favor: number;
  author: string;
  imgUrl?: string;
  createDate: any;
}
function ArticleItem(props: ArticleItemProps) {
  return (
    <div className="blog-article-item">
      <div className="blog-item-body">
        <h4>{props.title}</h4>
        <div className="blog-article-content">{props.content}</div>
        <div className="blog-article-info">
          <span className="favor">{props.favor}</span>
          <span className="author">{props.author}</span>
          <span className="date">{props.createDate}</span>
        </div>
      </div>
      <img src={props.imgUrl} />
    </div>
  );
}
export default memo(ArticleItem);

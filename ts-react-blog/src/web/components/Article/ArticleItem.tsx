import React, { memo } from "react";
export interface ArticleItemProps {
  id: string;
  title: string;
  content: string;
  favor: number;
  author: string;
  createDate: Date;
}
function ArticleItem(props: ArticleItemProps) {
  return (
    <div className="blog-article-item">
      <h4>{props.title}</h4>
      <div className="blog-article-content">{props.content}</div>
      <div className="blog-article-info"></div>
    </div>
  );
}
export default memo(ArticleItem);

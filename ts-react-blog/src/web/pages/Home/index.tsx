import React from "react";
import "./index.less";
import List, { ArticleListProps } from "../../components/Article/index";
interface Ipros {}
interface Itate {}

const data: any = [
  {
    id: 1,
    title: "前端安全之防范XSS实战小结",
    content:
      "由于前段时间业务有接触到富文本编辑器，且编辑器由用户直接使用，所以不可避免需要对其涉及到的XSS防护有所了解，因此对XSS防护做一个实战小结。",
    favor: 122,
    author: "13333",
    createDate: new Date(),
  },
];
export default class Home extends React.Component<Ipros, Itate> {
  render() {
    return (
      <div className="blog-home">
        <div className="blog-banner"></div>
        <div className="blog-main-width">
          <aside></aside>
          <main>
            <List
              title={["为你推荐", "近期热门", "最新内容"]}
              data={data}
            ></List>
          </main>
        </div>
      </div>
    );
  }
}

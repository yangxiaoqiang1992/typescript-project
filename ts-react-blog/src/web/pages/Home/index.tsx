import React from "react";
import "./index.less";
import List, { ArticleListProps } from "../../components/Article/index";
import RankList, { rankListDataType } from "../../components/RankList/index";
import Menu, { MenuItemProps } from "../../components/Menu/index";
import MenuGroup, { MenuGropProps } from "../../components/Menu/MenuGroup";
import Tags, { tagType } from "../../components/Tags/index";
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
    createDate: "今天",
  },
  {
    id: 2,
    title: "前端安全之防范XSS实战小结",
    content:
      "由于前段时间业务有接触到富文本编辑器，且编辑器由用户直接使用，所以不可避免需要对其涉及到的XSS防护有所了解，因此对XSS防护做一个实战小结。",
    favor: 122,
    author: "13333",
    createDate: "今天",
  },
  {
    id: 3,
    title: "前端安全之防范XSS实战小结",
    content:
      "由于前段时间业务有接触到富文本编辑器，且编辑器由用户直接使用，所以不可避免需要对其涉及到的XSS防护有所了解，因此对XSS防护做一个实战小结。",
    favor: 122,
    author: "13333",
    createDate: "今天",
  },
  {
    id: 4,
    title: "前端安全之防范XSS实战小结",
    content:
      "由于前段时间业务有接触到富文本编辑器，且编辑器由用户直接使用，所以不可避免需要对其涉及到的XSS防护有所了解，因此对XSS防护做一个实战小结。",
    favor: 122,
    author: "13333",
    createDate: "今天",
  },
];
const rankData: rankListDataType[] = [
  {
    avatorUrl:
      "https://avatar-static.segmentfault.com/394/718/394718777-5d81c8a70b088_small",
    heat: 123,
    name: "yangxiaoqiang",
  },
  {
    avatorUrl:
      "https://avatar-static.segmentfault.com/394/718/394718777-5d81c8a70b088_small",
    heat: 123,
    name: "yangxiaoqiang",
  },
  {
    avatorUrl:
      "https://avatar-static.segmentfault.com/394/718/394718777-5d81c8a70b088_small",
    heat: 123,
    name: "yangxiaoqiang",
  },
  {
    avatorUrl:
      "https://avatar-static.segmentfault.com/394/718/394718777-5d81c8a70b088_small",
    heat: 123,
    name: "yangxiaoqiang",
  },
  {
    avatorUrl:
      "https://avatar-static.segmentfault.com/394/718/394718777-5d81c8a70b088_small",
    heat: 123,
    name: "yangxiaoqiang",
  },
  {
    avatorUrl:
      "https://avatar-static.segmentfault.com/394/718/394718777-5d81c8a70b088_small",
    heat: 123,
    name: "yangxiaoqiang",
  },
  {
    avatorUrl:
      "https://avatar-static.segmentfault.com/394/718/394718777-5d81c8a70b088_small",
    heat: 123,
    name: "yangxiaoqiang",
  },
  {
    avatorUrl:
      "https://avatar-static.segmentfault.com/394/718/394718777-5d81c8a70b088_small",
    heat: 123,
    name: "yangxiaoqiang",
  },
  {
    avatorUrl:
      "https://avatar-static.segmentfault.com/394/718/394718777-5d81c8a70b088_small",
    heat: 123,
    name: "yangxiaoqiang",
  },
  {
    avatorUrl:
      "https://avatar-static.segmentfault.com/394/718/394718777-5d81c8a70b088_small",
    heat: 123,
    name: "yangxiaoqiang",
  },
];
const MenuData: Array<MenuItemProps> = [
  {
    name: "我要推荐",
  },
  {
    name: "近期热门",
  },
  {
    name: "最新内容",
  },
];
const tagsData: tagType[] = [
  {
    text: "java",
    color: "magenta",
  },
  {
    text: "javascript",
    color: "geekblue",
  },
  {
    text: "php",
    color: "blue",
  },
];
export default class Home extends React.Component<Ipros, Itate> {
  render() {
    return (
      <div className="blog-home">
        <div className="blog-banner"></div>
        <div className="blog-main-width blog-home-main">
          <aside className="blog-menu-aside">
            <Menu data={MenuData}>
              {/* {MenuData.map((item) => {
                return <Menu.Item name={item.name}></Menu.Item>;
              })} */}
            </Menu>
            <MenuGroup title="技术社区" data={MenuData}></MenuGroup>
            <MenuGroup title="技术频道" data={MenuData}></MenuGroup>
          </aside>
          <main>
            <List
              title={["为你推荐", "近期热门", "最新内容"]}
              data={data}
            ></List>
          </main>
          <aside className="blog-recommand-aside">
            <RankList title="排行榜" data={rankData} />
            <Tags title="相关标签" data={tagsData} />
          </aside>
        </div>
      </div>
    );
  }
}

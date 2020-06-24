import React, { memo } from "react";
import List from "../../components/Article/index";
import "./index.less";
export default memo(() => {
  const titles = ["最新问答", "等待回答", "热门回答", "付费回答", "众审中心"];
  return (
    <div className="blog-questions">
      <div className="blog-banner"></div>
      <div className="blog-main-width blog-question-main">
        <main className="blog-questions">
          <List title={titles}></List>
        </main>
        <aside className="blog-recommand-aside"></aside>
      </div>
    </div>
  );
});

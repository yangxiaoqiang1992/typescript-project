import React from "react";
import "./index.less";
interface Ipros {}
interface Itate {}
export default class Home extends React.Component<Ipros, Itate> {
  render() {
    return (
      <div className="blog-home">
        <div className="blog-banner"></div>
        <div className="blog-main-width">home</div>
      </div>
    );
  }
}

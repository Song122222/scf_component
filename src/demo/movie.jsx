import React, { Component } from "react";
import "../css/movie.less";
import Film from "./movie/Film";
import Cinema from "./movie/Cinema";
import Center from "./movie/Center";
export default class App extends Component {
  state = {
    list: [
      { id: 1, text: "电影" },
      { id: 2, text: "影院" },
      { id: 3, text: "我的" }
    ],
    current: 0
  };
  which() {
    switch (this.state.current) {
      case 0:
        return <Film></Film>;
      case 1:
        return <Cinema></Cinema>;
      case 2:
        return <Center></Center>;
      default:
        return null;
    }
  }
  handleClick(index) {
    this.setState({
      current: index
    });
  }
  render() {
    return (
      <div className="wr">
        {this.which()}
        <ul>
          {this.state.list.map((value, index) => {
            return (
              <li
                key={value.id}
                className={this.state.current === index ? "active" : ""}
                onClick={() => {
                  this.handleClick(index);
                }}
              >
                {value.text}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

import React, { Component } from "react";
import "../css/movie.less";
import Film from "./movie/movie1/Film";
import Center from "./movie/movie1/Center";
import Cinema from "./movie/movie1/Cinema";
export default class App extends Component {
  state = {
    list: [
      {
        id: 1,
        txt: "电影"
      },
      {
        id: 2,
        txt: "影院"
      },
      {
        id: 3,
        txt: "我的"
      }
    ],
    current: 0
  };
  whh() {
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
        {this.whh()}
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
                {value.txt}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

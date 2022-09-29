import React, { Component } from "react";
export default class App extends Component {
  state = {
    list: [
      {
        id: 1,
        name: "赵四"
      },
      {
        id: 2,
        name: "刘能"
      },
      {
        id: 3,
        name: "张三"
      }
    ]
  };

  render() {
    let newList = this.state.list.map((item) => {
      return <li key={item.id}>{item.name}</li>;
    });
    return (
      <div>
        <ul>{newList}</ul>
      </div>
    );
  }
}

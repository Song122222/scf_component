import React, { Component } from "react";
import Style from "../css/public.css";
export default class App extends Component {
  myRef = React.createRef();
  state = {
    list: []
  };
  render() {
    return (
      <div>
        <input ref={this.myRef} />
        <button onClick={this.handleClick}>添加</button>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li key={index}>
                {item}
                <button
                  onClick={() => {
                    this.handleDeleClick(index);
                  }}
                >
                  删除
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  handleDeleClick = (index) => {
    let newList = this.state.list.concat();
    newList.splice(index, 1);
    this.setState({
      list: newList
    });
    this.myRef.current.value = "";
  };
  handleClick = (e) => {
    if (e.target.value !== 0) {
      let newList = [...this.state.list];
      newList.push(e.target.value);
      console.log(e.target);
      this.setState({
        list: newList
      });
    }
  };
}

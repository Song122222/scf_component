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
          {this.state.list.map((value, index) => {
            return (
              <li key={index}>
                {value}
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
        <div className={this.state.list.length === 0 ? "" : Style.hidden}>
          暂无待办事项
        </div>
      </div>
    );
  }
  handleDeleClick = (index) => {
    let newList = [...this.state.list];
    newList.splice(index, 1);
    this.setState({
      list: newList
    });
  };
  handleClick = () => {
    if (this.myRef.current.value.trim().length !== 0) {
      let newList = [...this.state.list];
      newList.push(this.myRef.current.value.trim());
      this.setState({
        list: newList
      });
    }
  };
}

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
                <span
                  dangerouslySetInnerHTML={{
                    __html: item.value
                  }}
                ></span>
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
    let newList = this.state.list.concat();
    newList.splice(index, 1);
    this.setState({
      list: newList
    });
    this.myRef.current.value = "";
  };
  handleClick = () => {
    if (this.myRef.current.value.length !== 0) {
      let newList = [...this.state.list];
      newList.push(this.myRef.current.value);
      this.setState({
        list: newList
      });
    }
    this.myRef.current.value = "";
  };
}

import React, { Component } from "react";

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
      </div>
    );
  }
  handleDeleClick = (index) => {
    let newList = [...this.state.list];
    newList.splice(index, 1);
    this.setState({
      list: newList
    });
    this.myRef.current.value = "";
  };
  handleClick = () => {
    if (
      this.myRef.current.value.length !== 0 &&
      this.myRef.current.value.trim() != ""
    ) {
      let newList = [...this.state.list];
      newList.push(this.myRef.current.value.trim());

      this.setState({
        list: newList
      });
    }
    this.myRef.current.value = "";
  };
}

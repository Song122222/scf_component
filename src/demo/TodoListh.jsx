import React, { Component } from "react";

export default class App extends Component {
  state = {
    list: []
  };
  myRef = React.createRef();
  handleClick = () => {
    if (this.myRef.current.value.trim() !== "") {
      let newList = [...this.state.list];
      newList.push(this.myRef.current.value);
      this.setState({
        list: newList
      });
    }

    this.myRef.current.value = "";
  };
  handleDeleClick = (index) => {
    let newList = this.state.list;
    newList.splice(index, 1);
    this.setState({
      list: newList
    });
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.myRef} />
        <button onClick={this.handleClick}>点击添加</button>
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
                  点击删除
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

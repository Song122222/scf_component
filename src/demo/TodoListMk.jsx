import React, { Component } from "react";
import TodoItem from "../mk/TodoItem";
class TodoList extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    // 作为方法传递给子组件，这里需要改变this指向，让父组件的this指向一直指向自身
    this.handleItemClick = this.handleItemClick.bind(this);
    this.state = {
      inputValue: "",
      list: []
    };
  }
  // 这里会默认的传入一个事件对象，当事件对象的value值发生改变的时候，设置自身的状态引发render重绘
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
  // 每当输入的时候都会进行判断，当输入的键值的值是13,回车键   并且input输入框内的值不为空的时候引发setState，render重绘
  handleKeyUp(e) {
    if (e.keyCode === 13 && e.target.value !== "") {
      const list = [...this.state.list, this.state.inputValue];
      this.setState({
        list,
        inputValue: ""
      });
    }
  }

  handleItemClick(index) {
    const list = [...this.state.list];
    // 元素截取，开始截取的位置，截取几个
    list.splice(index, 1);
    this.setState({ list });
  }

  getListItems() {
    // 父子组件的概念
    // 父组件通过属性的形式向子组件传值
    return this.state.list.map((value, index) => {
      return (
        <TodoItem
          // 父组件通过属性像子组件传递数据
          // 子组件通过调用父组件方法的形式把数据传递回来
          content={value}
          index={index}
          key={index}
          deleteFunction={this.handleItemClick}
        />
      );
    });
  }

  render() {
    // 这是普通js中的注释
    return (
      <div>
        {/* 这是JSX中的注释 */}
        <label htmlFor="myinput">请输入内容：</label>
        <input
          id="myinput"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          onKeyUp={this.handleKeyUp}
        />
        <ul>{this.getListItems()}</ul>
      </div>
    );
  }
}

export default TodoList;

import React, { Component } from "react";
import axios from "axios";
export default class Cinema extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cinemaList: [],
      backCinemaList: []
    };
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
      method: "get",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',

        "X-Host": "mall.film-ticket.cinema.list"
      }
    }).then((res) => {
      this.setState({
        cinemaList: res.data.data.cinemas,
        backCinemaList: res.data.data.cinemas
      });
    });
  }
  handleInput = (event) => {
    let newList = this.state.backCinemaList.filter(
      (item) =>
        item.name.toUpperCase().includes(event.target.value.toUpperCase()) ||
        item.address.toUpperCase().includes(event.target.value.toUpperCase())
    );

    this.setState({
      cinemaList: newList
    });
    //cinemaList 每次都会被重新覆盖，，
  };
  render() {
    return (
      <div>
        <input onInput={this.handleInput} />
        {this.state.cinemaList.map((item) => {
          return (
            <dl key={item.cinemaId}>
              <dt>{item.name}</dt>
              <dd>{item.address}</dd>
            </dl>
          );
        })}
      </div>
    );
  }
}

import React, { Component } from "react";

export default class Box extends Component {
  render() {
    return (
      <div className="game_box_ui">
        <p>{this.props.name}</p>
        <img
          src={this.props.game_data && this.props.game_data.img}
          alt="그림"
        />
        <p>이름:{this.props.game_data && this.props.game_data.name}</p>
        <p>결과:{this.props.game_result}</p>
      </div>
    );
  }
}

import React, { Component } from "react";
import Box from "./component/Box";
import "./App.css";
const choice = {
  r: {
    name: "바위",
    img: "https://gdimg.gmarket.co.kr/463580244/still/600?ver=1631615157",
  },
  s: {
    name: "가위",
    img: "https://cdn-icons-png.flaticon.com/512/4975/4975327.png",
  },
  p: {
    name: "보",
    img: "https://gdimg.gmarket.co.kr/195177376/still/600?ver=1670470605",
  },
};

export default class AppClass extends Component {
  constructor() {
    super();
    this.state = {
      user_item: null,
      com_item: null,
      game_user_result: null,
      game_com_result: null,
    };
  }

  play = (choice_item) => {
    let user_item = choice[choice_item];
    let com_item = this.random_Choice();
    let game_user_result = this.game_vs(user_item.name, com_item.name);
    let game_com_result = this.game_vs(com_item.name, user_item.name);
    this.setState({ user_item: user_item });
    this.setState({ com_item: com_item });
    this.setState({ game_user_result: game_user_result });
    this.setState({ game_com_result: game_com_result });
    //console.log({ game_user_result });
  };

  random_Choice = () => {
    let itemArray = Object.keys(choice);
    let random_item = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[random_item];
    return choice[final];
  };
  game_vs = (user, com) => {
    if (user === com) {
      return "비겼습니다!";
    }
    if (user === com) {
      return "비겼습니다!";
    }
    if (
      (user === "바위" && com === "가위") ||
      (user === "보" && com === "바위") ||
      (user === "가위" && com === "보")
    ) {
      return "이겼습니다!";
    } else {
      return "졌습니다!";
    }
  };

  render() {
    return (
      <div className="game_ui">
        <div className="game_box">
          <Box
            name="you"
            game_data={this.state.user_item}
            game_result={this.state.game_user_result}
          ></Box>
          <Box
            name="com"
            game_data={this.state.com_item}
            game_result={this.state.game_com_result}
          ></Box>
        </div>
        <div className="game_bt">
          <button onClick={() => this.play("s")}>가위</button>
          <button onClick={() => this.play("r")}>바위</button>
          <button onClick={() => this.play("p")}>보</button>
        </div>
      </div>
    );
  }
}

import * as React from "react";
import { gameInit } from "../Game";

class StageComplete extends React.Component {
  componentDidMount() {
    // new Game();
    gameInit();
  }
  render() {
    return <div>muskein</div>;
  }
}

export default StageComplete;

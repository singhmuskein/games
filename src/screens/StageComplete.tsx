import * as React from "react";
import "../styles/stagecomplete.scss";
import { Modal } from "../components/common";

class StageComplete extends React.Component {
  // componentDidMount() {
  //   // new Game();
  //   gameInit();
  // }
  render() {
    return (
      <div className='stage-complete'>
        <Modal />
      </div>
    );
  }
}

export default StageComplete;

import * as React from "react";
import "../styles/stagecomplete.scss";
//import LoadingScreen from "./LoadingScreen";
import { Modal } from "../components/common";
import { IStageCompleteState } from "../interfaces/StageComplete";

class StageComplete extends React.Component<{}, IStageCompleteState> {
  // componentDidMount() {
  //   // new Game();
  //   gameInit();
  // }
  state = { showModal: true };

  render() {
    return (
      <div /*className='stage-complete'*/>
        <Modal
          isOpen={this.state.showModal}
          backgroundColor='rgb(28,183,150)'
          stageStatus='Stage Failed'
          stageButton='Try Again'
          tip='Lets, try again. You have more chances.'
          onClick={() => alert("under dev")}
        />
        {/* <LoadingScreen /> */}
      </div>
    );
  }
}

export default StageComplete;

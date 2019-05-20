import * as React from "react";
import "../styles/stagecomplete.scss";
//import LoadingScreen from "./LoadingScreen";
import {
  Modal,
  ModalContainer,
  ModalBoxInner,
  ToolTip,
  CancelButton
} from "../components/common";
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
        <Modal isOpen={this.state.showModal}>
          <CancelButton onClick={() => alert("under dev")} />
          <div className='modal-align-center'>
            <ModalContainer
              onClick={() => alert("dev")}
              backgroundColor='rgb(28,183,150)'
              stageStatus='Stage Failed'
              stageButton='Try Again'
            >
              <ModalBoxInner />
            </ModalContainer>
          </div>

          <ToolTip tip='Lets, try again. You have more chances.' />
        </Modal>
        {/* <LoadingScreen /> */}
      </div>
    );
  }
}

export default StageComplete;

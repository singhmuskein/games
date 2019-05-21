import * as React from "react";
import "../styles/stagecomplete.css";
import {
  Modal,
  ModalContainer,
  ModalBoxInner,
  ToolTip,
  CancelButton
} from "../components/common";
import "../styles/_common.css";

//type declaration
interface IStageCompleteState {
  showModal: boolean;
}

export default class StageComplete extends React.Component<
  {},
  IStageCompleteState
> {
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
              color={"#c9a881"}
              text='Your Score'
              score={100}
              onClick={() => alert("dev")}
              backgroundColor='rgb(28,183,150)'
              stageStatus='Stage Failed'
              stageButton='Try Again'
            >
              <ModalBoxInner color={"#c9a881"} text='Best Score' score={100} />
            </ModalContainer>
          </div>

          <ToolTip tip='Lets, try again. You have more chances.' />
        </Modal>
        {/* <LoadingScreen /> */}
      </div>
    );
  }
}

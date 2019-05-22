import * as React from "react";
import "../styles/stagecomplete.css";
import {
  Modal,
  ModalContainer,
  ModalBoxInner,
  ToolTip
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
        <Modal
          cancelButton={true}
          cancelButtonBackgroundColor='#ef4c2e'
          cancelButtonClick={() => alert("dev")}
          isOpen={this.state.showModal}
        >
          <div className='modal-align-center'>
            <ModalContainer
              //wantToPlayAgain={true}
              ribbonTextColor='white'
              textColor={"#c9a881"}
              numberColor={"#c9a881"}
              text='Your Score'
              score={100}
              onClick={() => alert("dev")}
              backgroundColor='rgb(28,183,150)'
              stageStatus='Stage Failed'
              stageButton='Try Again'
            >
              <ModalBoxInner
                numberColor={"#c9a881"}
                textColor={"#c9a881"}
                text='Best Score'
                score={100}
              />
            </ModalContainer>
            <ToolTip tip='Lets, try again. You have more chances.' />
          </div>
        </Modal>
        {/* <LoadingScreen /> */}
      </div>
    );
  }
}

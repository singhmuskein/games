import * as React from "react";
import "../styles/wellplayedscreen.css";
import "../styles/goodjobscreen.css";
import {
  Modal,
  ModalContainer,
  ModalBoxInner,
  YellowButton,
  EarlyDawnText
} from "../components/common";
import "../styles/_common.css";

//type declaration
interface IGoodJobState {
  showModal: boolean;
}

export default class GoodJobScreen extends React.Component<{}, IGoodJobState> {
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
              greenRibbon={true}
              onClick={() => alert("dev")}
              stageStatus='Good Job'
            >
              <ModalBoxInner
                numberColor={"#8a4e1b"}
                textColor={"#8a4e1b"}
                text='Best Score'
                score={2300}
              />
              <div className='come-back-tommorrow-text nunito-font-regular'>
                Come back tomorrow for a new adventure!
              </div>
            </ModalContainer>
            <div className='yellow-button-row-container'>
              <YellowButton color='#a06e3e' text='SHARE' />
              <YellowButton color='#a06e3e' text='LEADERBOARD' />
            </div>
            <div className='early-dawn-text-container'>
              <EarlyDawnText
                fontSize={"15px"}
                text={"Winners will be announced"}
                className='nunito-font-regular font-color-early-dawn'
              />
              <EarlyDawnText
                fontSize={"22px"}
                text={"Tomorrow at 9:00 AM"}
                className='nunito-font-bold font-color-early-dawn'
              />
            </div>
            <div className='early-dawn-and-yellow-button-container'>
              <div>
                <EarlyDawnText
                  fontSize={"12px"}
                  text={"Want to play more games?"}
                  className='nunito-font-regular font-color-early-dawn'
                />
              </div>

              <YellowButton color='#8a4e1b' text='Visit Flipkart Game Zone' />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

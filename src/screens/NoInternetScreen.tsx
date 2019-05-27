import * as React from "react";
import "../styles/nointernetscreen.css";
import { Modal, ModalContainer } from "../components/common";
import "../styles/_common.css";

//type declaration
interface INoInternet {
  showModal: boolean;
}

export default class NoInternetScreen extends React.Component<{}, INoInternet> {
  state = { showModal: true };

  render() {
    return (
      <div>
        <Modal cancelButton={false} isOpen={this.state.showModal}>
          <ModalContainer
            yellowBlockButton={true}
            stageButton='RETRY'
            onClick={() => alert("dev")}
            stageStatus='Good Job'
          >
            <div className='no-internet-img-container display-content-and-items-center nunito-font-extra-bold font-color-white'>
              ❕
            </div>
            <div className='align-not-connected-to-inernet-and-looks-like-no-internet-texts'>
              <div className=' text-align-center not-connected-to-internet-text display-content-and-items-center nunito-font-regular font-color-tundora'>
                Not Connected to Internet
              </div>
              <div className='text-align-center looks-like-no-internet-text nunito-font-regular font-color-suva-grey'>
                Looks like you are not connected to internet
              </div>
            </div>
          </ModalContainer>
        </Modal>
      </div>
    );
  }
}

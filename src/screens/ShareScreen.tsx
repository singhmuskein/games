import * as React from "react";
import { Modal, ShareCard } from "../components/common";
import "../styles/sharescreen.css";
import { ASSETS } from "../assets/AssetPath";

export default class ShareScreen extends React.Component<{}, {}> {
  state = { showModal: true };

  render() {
    return (
      <Modal
        cancelButton={true}
        cancelButtonBackgroundColor='#ef4c2e'
        cancelButtonClick={() => alert("dev")}
        isOpen={this.state.showModal}
      >
        <div className='share-screen-container'>
          <div className='complete-a-task-text text-align-center font-color-white nunito-font-regular'>
            complete a task to earn an extra chances
          </div>

          <div className='chances-claimed-container font-color-white nunito-font-regular'>
            0/2 chances claimed
          </div>

          <ShareCard
            onClick={() => alert("dev")}
            text='share with your friends'
            src={ASSETS.FLIPKART_HOME}
          />
          <ShareCard
            onClick={() => alert("dev")}
            text='Visit the levis brand store on flipkart'
            src={ASSETS.FLIPKART_HOME}
          />
        </div>
      </Modal>
    );
  }
}

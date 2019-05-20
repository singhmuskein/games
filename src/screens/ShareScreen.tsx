import * as React from "react";
import { Modal, CancelButton, ShareCard } from "../components/common";
import "../styles/sharescreen.scss";
import { ASSETS } from "../assets/AssetPath";

class ShareScreen extends React.Component<{}, {}> {
  state = { showModal: true };

  render() {
    return (
      <Modal isOpen={this.state.showModal}>
        <CancelButton onClick={() => alert("under dev")} />
        <div className='share-screen-container'>
          <div className='complete-a-task-text'>
            complete a task to earn an extra chances
          </div>

          <div className='chances-claimed-container'>0/2 chances claimed</div>

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

export default ShareScreen;

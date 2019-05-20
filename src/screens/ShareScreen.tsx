import * as React from "react";
import { Modal, CancelButton } from "../components/common";

class ShareScreen extends React.Component<{}, {}> {
  state = { showModal: true };

  render() {
    return (
      <Modal isOpen={this.state.showModal}>
        <CancelButton onClick={() => alert("under dev")} />
        <div className='share-screen-container'>
          <div className='complete-a-task-text'>
            One more chance to play the game
          </div>
        </div>
        <div className='chances-claimed-container'>0/2 chances claimed</div>
      </Modal>
    );
  }
}

export default ShareScreen;

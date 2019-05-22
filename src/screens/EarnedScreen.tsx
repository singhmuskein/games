import * as React from "react";
import { Modal } from "../components/common";
import { ASSETS } from "../assets/AssetPath";
import "../styles/earnedscreen.css";

export default class EarnedScreen extends React.Component<{}, {}> {
  state = { showModal: true };

  render() {
    return (
      <Modal
        cancelButton={true}
        cancelButtonBackgroundColor='#ef4c2e'
        cancelButtonClick={() => alert("dev")}
        isOpen={this.state.showModal}
      >
        <div className='hurray-img-container'>
          <img alt='hurray' src={ASSETS.HURRAY_EARNED} />

          <div className='earned-text'>You've earned</div>
          <div className='one-more-chance-text'>
            One more chance to play the game
          </div>
        </div>
        <div
          onClick={() => alert("retry game under dev")}
          className='retry-game-text'
        >
          Retry Game
        </div>
      </Modal>
    );
  }
}

import * as React from "react";
import "../../styles/sharecard.css";

//type declaration
interface IShareCard {
  text: string;
  src: string;
  onClick: () => void;
}

//This is card that can hold image, text and forward arrow
const ShareCard = (props: IShareCard) => {
  return (
    <div className='share-card-container'>
      <div
        onClick={props.onClick}
        className='home-image-container bg-white-color'
      >
        <img className='home-image' src={props.src} />
        <div className='share-this-game-text font-color-black nunito-font-regular'>
          {props.text}
        </div>
        <div className='go-forward-arrow display-content-and-items-center nunito-font-regular'>
          >
        </div>
      </div>
    </div>
  );
};

export { ShareCard };

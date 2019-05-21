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
      <div onClick={props.onClick} className='home-image-container'>
        <img className='home-image' src={props.src} />
        <div className='share-this-game-text'>{props.text}</div>
        <div className='go-forward-arrow'>></div>
      </div>
    </div>
  );
};

export { ShareCard };

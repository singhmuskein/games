import * as React from "react";
import "../../styles/sharecard.scss";
import { IShareCard } from "../../interfaces/ShareCard";

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

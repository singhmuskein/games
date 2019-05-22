import * as React from "react";
import { ScoreText } from "../common/ScoreText";
import "../../styles/modalcontainer.css";

//type declaration
interface IModalContainer {
  children: React.ReactNode;
  stageStatus: string;
  stageButton?: string;
  backgroundColor: string;
  onClick: () => void;
  textColor: string;
  numberColor: string;
  text: string;
  score: number;
  wantToPlayAgain?: any;
  ribbonTextColor: string;
  yellowBlockButton?: any;
}

//This is Optional, but responsible to render Want to play again text
const renderWantToPlayAgainText = (wantToPlayAgain: boolean) => {
  if (wantToPlayAgain) {
    return (
      <div className='want-to-play-again-text font-color-saddle-brown '>
        Want to Play Again?
      </div>
    );
  }
  return null;
};

const renderYellowBlockButton = (
  yellowBlockButton: boolean,
  props: IModalContainer
) => {
  if (yellowBlockButton) {
    return (
      <div onClick={props.onClick} className='yellow-button-container'>
        {renderWantToPlayAgainText(props.wantToPlayAgain)}
        <div className='yellow-button-text nunito-font-regular'>
          {props.stageButton}
        </div>
      </div>
    );
  }
  return null;
};

// This is a Main modal Container, that holds all other sub components
const ModalContainer = (props: IModalContainer) => {
  return (
    <div className='container yellow-box-shadow'>
      <div className='sub-container'>
        <div
          style={{
            backgroundColor: props.backgroundColor,
            color: props.ribbonTextColor
          }}
          className='overlay-ribbon nunito-font-regular'
        >
          {props.stageStatus}
        </div>
        <ScoreText
          numberColor={props.numberColor}
          textColor={props.textColor}
          text={props.text}
          score={props.score}
        />
        {props.children}
      </div>

      {renderYellowBlockButton(props.yellowBlockButton, props)}
    </div>
  );
};

export { ModalContainer };

/* 
Props available out of this component
  children
  stageStatus
  stageButton
  backgroundColor
  onClick
  textColor
  numberColor
  text
  score
  ribbonTextColor
  yellowBlockButton(optional)
  wantToPlayAgain(optional)
*/

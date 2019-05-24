import * as React from "react";
import { ScoreText } from "../common/ScoreText";
import "../../styles/modalcontainer.css";
import { RibbonGrey } from "./RibbonGrey";
import { RibbonGreen } from "./RibbonGreen";

//type declaration
interface IModalContainer {
  children: any;
  stageStatus: string;
  stageButton?: string;
  onClick: () => void;
  textColor?: string;
  numberColor?: string;
  text?: string;
  score?: number;
  wantToPlayAgain?: any;
  yellowBlockButton?: any;
  greyRibbon?: boolean;
  greenRibbon?: boolean;
}

//This is Optional, but responsible to render Want to play again text
const renderWantToPlayAgainText = (wantToPlayAgain: boolean) => {
  if (wantToPlayAgain) {
    return (
      <div className='want-to-play-again-text nunito-font-regular font-color-saddle-brown '>
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

//render ribbon grey/green ribbon based on boolean condition
const renderRibbonColor = (props: IModalContainer) => {
  const { greyRibbon, greenRibbon, stageStatus } = props;
  if (greyRibbon && greenRibbon) {
    return <RibbonGrey stageStatus={stageStatus} />;
  } else if (greyRibbon) {
    return <RibbonGrey stageStatus={stageStatus} />;
  } else if (props.greenRibbon) {
    return <RibbonGreen stageStatus={stageStatus} />;
  }
  return null;
};

// This is a Main modal Container, that holds all other sub components
const ModalContainer = (props: IModalContainer) => {
  return (
    <div className='container yellow-box-shadow'>
      <div className='sub-container'>
        {/* <div
          style={{
            backgroundColor: props.backgroundColor,
            color: props.ribbonTextColor
          }}
          className='overlay-ribbon nunito-font-regular'
        >
          {props.stageStatus}
        </div> */}
        <div className='align-ribbon'>{renderRibbonColor(props)}</div>
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
  onClick
  textColor
  numberColor
  text
  score
  yellowBlockButton(optional)
  wantToPlayAgain(optional)
*/

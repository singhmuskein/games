import * as React from "react";
import { ScoreText } from "../common/ScoreText";
import "../../styles/modalcontainer.css";

//type declaration
interface IModalContainer {
  children: React.ReactNode;
  stageStatus: string;
  stageButton: string;
  backgroundColor: string;
  onClick: () => void;
  color: string;
  text: string;
  score: number;
}

// This is a Main modal Container, that holds all other sub components
const ModalContainer = (props: IModalContainer) => {
  return (
    <div className='container yellow-box-shadow'>
      <div className='sub-container'>
        <div
          style={{ backgroundColor: props.backgroundColor }}
          className='overlay-ribbon'
        >
          {props.stageStatus}
        </div>
        <ScoreText color={props.color} text={props.text} score={props.score} />
        {props.children}
      </div>

      <div onClick={props.onClick} className='yellow-button-container'>
        <div className='yellow-button-text'>{props.stageButton}</div>
      </div>
    </div>
  );
};

export { ModalContainer };

import * as React from "react";
import { ScoreText } from "../common/ScoreText";
import "../../styles/modalcontainer.scss";
import { IModalContainer } from "../../interfaces/ModalContainer";

const ModalContainer = (props: IModalContainer) => {
  return (
    <div className='container'>
      <div className='sub-container'>
        <div
          style={{ backgroundColor: props.backgroundColor }}
          className='overlay-ribbon'
        >
          {props.stageStatus}
        </div>
        <ScoreText color={"#c9a881"} text='Your Score' score={100} />
        {props.children}
      </div>

      <div onClick={props.onClick} className='yellow-button-container'>
        <div className='yellow-button-text'>{props.stageButton}</div>
      </div>
    </div>
  );
};

export { ModalContainer };

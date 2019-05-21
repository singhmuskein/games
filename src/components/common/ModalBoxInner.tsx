import * as React from "react";
import "../../styles/modalboxinner.css";
import { ScoreText } from "./ScoreText";

//type declaration
interface IModalBoxInner {
  color: string;
  text: string;
  score: number;
}

// This is container, that holds score text for best score
const ModalBoxInner = (props: IModalBoxInner) => {
  return (
    <div className='modal-box-inner'>
      <ScoreText color={props.color} text={props.text} score={props.score} />
    </div>
  );
};

export { ModalBoxInner };

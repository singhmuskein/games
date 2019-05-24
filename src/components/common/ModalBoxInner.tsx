import * as React from "react";
import "../../styles/modalboxinner.css";
import { ScoreText } from "./ScoreText";
import { ASSETS } from "../../assets/AssetPath";

//type declaration
interface IModalBoxInner {
  textColor: string;
  numberColor: string;
  text: string;
  score: number;
}

// This is container, that holds score text for best score
const ModalBoxInner = (props: IModalBoxInner) => {
  return (
    <div className='modal-box-inner bg-oasis-color'>
      <img className='crown-img-container' src={ASSETS.CROWN} />
      <ScoreText
        textColor={props.textColor}
        numberColor={props.numberColor}
        text={props.text}
        score={props.score}
      />
    </div>
  );
};

export { ModalBoxInner };

/* 
props available out of this props
  textColor
  numberColor
  text
  score
*/

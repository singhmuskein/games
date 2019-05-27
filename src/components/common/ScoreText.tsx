import * as React from "react";
import "../../styles/scoretext.css";

//type declaration
interface IScoreText {
  textColor?: string;
  numberColor?: string;
  text?: string;
  score?: number;
}

//This holds a text and score in columns
const ScoreText = (props: IScoreText) => {
  return (
    <div className='score-text'>
      <div
        style={{ color: props.textColor }}
        className='score-text-string nunito-font-regular'
      >
        {props.text}
      </div>
      <div
        style={{ color: props.numberColor }}
        className='score-text-number nunito-font-bold'
      >
        {props.score}
      </div>
    </div>
  );
};

export { ScoreText };

/*
props available ou of this component
  text
  score
  textColor
  numberColor
*/

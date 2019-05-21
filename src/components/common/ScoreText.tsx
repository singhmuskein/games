import * as React from "react";
import "../../styles/scoretext.css";

//type declaration
interface IScoreText{
  text: string,
  score: number,
  color: string
}

//This holds a text and score in columns
const ScoreText = (props: IScoreText) => {
  return (
    <div className='score-text'>
      <div style={{ color: props.color }} className='score-text-string'>
        {props.text}
      </div>
      <div style={{ color: props.color }} className='score-text-number'>
        {props.score}
      </div>
    </div>
  );
};

export { ScoreText };

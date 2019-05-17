import * as React from "react";
import "../../styles/scoretext.scss";
import { IScoreText } from "../../interfaces/ScoreText";

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

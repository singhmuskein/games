import * as React from "react";
import "../../styles/modalboxinner.scss";
import { ScoreText } from "./ScoreText";

const ModalBoxInner = () => {
  return (
    <div className='modal-box-inner'>
      <ScoreText color={"#c9a881"} text='Best Score' score={100} />
    </div>
  );
};

export { ModalBoxInner };

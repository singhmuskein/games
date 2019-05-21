import * as React from "react";
import "../../styles/cancelbutton.css";
import "../../styles/_common.css";

interface ICancelButton {
  onClick: () => void;
}

const CancelButton = (props: ICancelButton) => {
  return (
    <div
      onClick={props.onClick}
      className='cancel-button-container nunito-font-regular'
    >
      X
    </div>
  );
};

export { CancelButton };

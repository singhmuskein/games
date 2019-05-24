import * as React from "react";
import "../../styles/cancelbutton.css";
import "../../styles/_common.css";

interface ICancelButton {
  onClick?: () => void;
  backgroundColor: string;
}

const CancelButton = (props: ICancelButton) => {
  return (
    <div
      onClick={props.onClick}
      style={{ backgroundColor: props.backgroundColor }}
      className='cancel-button-container nunito-font-regular'
    >
      X
    </div>
  );
};

export { CancelButton };

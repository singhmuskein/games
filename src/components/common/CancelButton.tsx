import * as React from "react";
import "../../styles/cancelbutton.scss";

interface ICancelButton {
  onClick: () => void;
}

const CancelButton = (props: ICancelButton) => {
  return (
    <div onClick={props.onClick} className='cancel-button-container'>
      X
    </div>
  );
};

export { CancelButton };

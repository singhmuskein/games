import * as React from "react";
import "../../styles/yellowbutton.css";

//type declaration
interface IYellowButton {
  color: string;
  text: string;
}

const YellowButton = (props: IYellowButton) => {
  return (
    <div
      style={{ color: props.color }}
      className='yellow-button nunito-font-regular bg-selective-yellow-color yellow-button-text-size'
    >
      {props.text}
    </div>
  );
};

export { YellowButton };

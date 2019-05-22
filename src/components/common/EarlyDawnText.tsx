import * as React from "react";
import "../../styles/earlydawntext.css";

//type declaration
interface IEarlyDawnText {
  fontSize: string | number;
  text: string;
  className: string;
}

const EarlyDawnText = (props: IEarlyDawnText) => {
  return (
    <div style={{ fontSize: props.fontSize }} className={props.className}>
      {props.text}
    </div>
  );
};

export { EarlyDawnText };

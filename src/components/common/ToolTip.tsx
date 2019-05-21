import * as React from "react";
import { ASSETS } from "../../assets/AssetPath";
import "../../styles/tooltip.css";

//type declaration
interface IToolTip {
  tip: string;
}

// This holds a image adjacent to tool tip for game tips.
const ToolTip = (props: IToolTip) => {
  return (
    <div className='tool-tip-container'>
      <div className='img-container'>
        <img src={ASSETS.SNAKE} className='image-circle' />
      </div>
      <div className='display-content-and-items-center'>
        <div className='tooltip'>
          <div className='tooltiptext nunito-font-regular'>{props.tip}</div>
        </div>
      </div>
    </div>
  );
};

export { ToolTip };

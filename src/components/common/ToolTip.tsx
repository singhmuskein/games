import * as React from "react";
import { ASSETS } from "../../assets/AssetPath";
import "../../styles/tooltip.scss";
import { IToolTip } from "src/interfaces/ToolTip";

const ToolTip = (props: IToolTip) => {
  return (
    <div className='tool-tip-container'>
      <div className='img-container'>
        <img src={ASSETS.SNAKE} className='image-circle' />
      </div>
      <div className='tooltip'>
        <div className='tooltiptext'>{props.tip}</div>
      </div>
    </div>
  );
};

export { ToolTip };

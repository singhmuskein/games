import * as React from "react";
import "../../styles/ribbon.css";
import { ASSETS } from "../../assets/AssetPath";

//type declaration
interface IRibbonGrey {
  stageStatus: string;
}

const RibbonGreen = (props: IRibbonGrey) => {
  return (
    <div
      className='ribbon-img-green nunito-font-extra-bold'
      style={{
        backgroundImage: `url(${ASSETS.RIBBONGREEN})`,
        color: "#fff4da"
      }}
    >
      {props.stageStatus}
    </div>
  );
};

export { RibbonGreen };

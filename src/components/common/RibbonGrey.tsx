import * as React from "react";
import "../../styles/ribbon.css";
import { ASSETS } from "../../assets/AssetPath";

//type declaration
interface IRibbonGrey {
  stageStatus: string;
}

const RibbonGrey = (props: IRibbonGrey) => {
  return (
    <div
      className='ribbon-img-grey nunito-font-extra-bold'
      style={{
        backgroundImage: `url(${ASSETS.RIBBONGREY})`
      }}
    >
      {props.stageStatus}
    </div>
  );
};

export { RibbonGrey };

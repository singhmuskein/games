import * as React from "react";
import * as ReactModal from "react-modal";
import "../../styles/modal.scss";
import { IModal } from "../../interfaces/Modal";

ReactModal.setAppElement("#root");

const Modal = (props: IModal) => {
  return (
    <div>
      <ReactModal style={customStyles} isOpen={props.isOpen}>
        {props.children}
      </ReactModal>
    </div>
  );
};

const customStyles = {
  content: {
    position: "absolute",
    top: "0px",
    left: "0px",
    right: "10px",
    bottom: "0px",
    borderWidth: "0px",
    backgroundColor: "rgb(15,34,38)",
    borderRadius: "0px",
    padding: "0px",
    width: "100%",
    height: "100%"
  }
};

export { Modal };

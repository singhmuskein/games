import * as React from "react";
import * as ReactModal from "react-modal";
import "../../styles/modal.scss";
import { IModal } from "../../interfaces/Modal";

ReactModal.setAppElement("#root");

const Modal = (props: IModal) => {
  return (
    <ReactModal style={customStyles} isOpen={props.isOpen}>
      {props.children}
    </ReactModal>
  );
};

const customStyles = {
  content: {
    position: "absolute",
    top: "0px",
    left: "0px",
    right: "0px",
    bottom: "0px",
    backgroundColor: "rgb(15,34,38)",
    borderRadius: "0px",
    padding: "0px",
    width: "100%",
    height: "100%"
  }
};

export { Modal };

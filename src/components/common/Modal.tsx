import * as React from "react";
import * as ReactModal from "react-modal";
import "../../styles/modal.css";

ReactModal.setAppElement("#root");

//type declaration
interface IModal {
  isOpen: boolean;
  children: React.ReactNode;
}

//This is the modal that overlays on top of any underlying screen.
const Modal = (props: IModal) => {
  return (
    <div>
      <ReactModal
        className='modal'
        overlayClassName='modal-overlay'
        isOpen={props.isOpen}
      >
        {props.children}
      </ReactModal>
    </div>
  );
};

export { Modal };

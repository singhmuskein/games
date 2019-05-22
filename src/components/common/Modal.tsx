import * as React from "react";
import * as ReactModal from "react-modal";
import "../../styles/modal.css";
import { CancelButton } from "./CancelButton";

ReactModal.setAppElement("#root");

//type declaration
interface IModal {
  isOpen: boolean;
  children: React.ReactNode;
  cancelButtonClick: () => void;
  cancelButton?: any;
  cancelButtonBackgroundColor?: any;
}

//This is Optional, but responsible to render tha cancel Button [X] on modal
const renderCancelButton = (props: IModal) => {
  if (props.cancelButton) {
    return (
      <CancelButton
        backgroundColor={props.cancelButtonBackgroundColor}
        onClick={props.cancelButtonClick}
      />
    );
  }
  return null;
};

//This is the modal that overlays on top of any underlying screen.
const Modal = (props: IModal) => {
  return (
    <div>
      <ReactModal
        className='modal'
        overlayClassName='modal-overlay'
        isOpen={props.isOpen}
      >
        {renderCancelButton(props)}
        {props.children}
      </ReactModal>
    </div>
  );
};

export { Modal };

/* 
Props available out of this component
  isOpen
  children
  cancelButtonClick
  cancelButton(optional)
*/

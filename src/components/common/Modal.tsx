import * as React from "react";
import * as ReactModal from "react-modal";
import { ToolTip, ModalContainer, ModalBoxInner } from "../common/index";
import "../../styles/modal.scss";
import { IModal } from "../../interfaces/Modal";

ReactModal.setAppElement("#root");

class Modal extends React.Component<IModal, {}> {
  constructor(props: IModal) {
    super(props);
  }
  render() {
    return (
      <ReactModal style={customStyles} isOpen={this.props.isOpen}>
        <div className='modal-align-center'>
          <ModalContainer
            backgroundColor={this.props.backgroundColor}
            stageStatus={this.props.stageStatus}
            stageButton={this.props.stageButton}
            onClick={this.props.onClick}
          >
            <ModalBoxInner />
          </ModalContainer>
        </div>

        <ToolTip tip={this.props.tip} />
      </ReactModal>
    );
  }
}
const customStyles = {
  content: {
    position: "relative",
    top: "0px",
    left: "0px",
    right: "0px",
    bottom: "0px",
    backgroundColor: "rgb(15,34,38)",
    overflow: "auto",
    outline: "none",
    padding: "0px",
    width: "100%",
    height: "100%"
  }
};

export { Modal };

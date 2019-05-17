import * as React from "react";
import * as ReactModal from "react-modal";
import { ToolTip, ModalContainer, ModalBoxInner } from "../common/index";
import "../../styles/modal.scss";

ReactModal.setAppElement("#root");

class Modal extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      showModal: true
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  public modalState() {
    const stateRef = this.state;
    return stateRef["showModal"];
  }

  render() {
    return (
      <ReactModal style={customStyles} isOpen={this.modalState()}>
        <div className='modal-align-center'>
          <ModalContainer
            backgroundColor='rgb(28,183,150)'
            stageStatus='Stage Failed'
            stageButton='Try Again'
          >
            <ModalBoxInner />
          </ModalContainer>
        </div>

        <ToolTip tip='Lets, try again. You have more chances.' />
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

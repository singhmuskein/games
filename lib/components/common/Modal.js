"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactModal = require("react-modal");
const index_1 = require("../common/index");
require("../../styles/modal.scss");
ReactModal.setAppElement("#root");
class Modal extends React.Component {
    constructor(props) {
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
    modalState() {
        const stateRef = this.state;
        return stateRef["showModal"];
    }
    render() {
        return (React.createElement(ReactModal, { style: customStyles, isOpen: this.modalState() },
            React.createElement("div", { className: 'modal-align-center' },
                React.createElement(index_1.ModalContainer, { backgroundColor: 'rgb(28,183,150)', stageStatus: 'Stage Failed', stageButton: 'Try Again' },
                    React.createElement(index_1.ModalBoxInner, null))),
            React.createElement(index_1.ToolTip, { tip: 'Lets, try again. You have more chances.' })));
    }
}
exports.Modal = Modal;
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
//# sourceMappingURL=Modal.js.map
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
    }
    render() {
        return (React.createElement(ReactModal, { style: customStyles, isOpen: this.props.isOpen },
            React.createElement("div", { className: 'modal-align-center' },
                React.createElement(index_1.ModalContainer, { backgroundColor: this.props.backgroundColor, stageStatus: this.props.stageStatus, stageButton: this.props.stageButton, onClick: this.props.onClick },
                    React.createElement(index_1.ModalBoxInner, null))),
            React.createElement(index_1.ToolTip, { tip: this.props.tip })));
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
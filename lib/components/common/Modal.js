"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactModal = require("react-modal");
require("../../styles/modal.scss");
ReactModal.setAppElement("#root");
const Modal = (props) => {
    return (React.createElement(ReactModal, { style: customStyles, isOpen: props.isOpen }, props.children));
};
exports.Modal = Modal;
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
//# sourceMappingURL=Modal.js.map
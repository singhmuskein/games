"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("../../styles/cancelbutton.scss");
const CancelButton = (props) => {
    return (React.createElement("div", { onClick: props.onClick, className: 'cancel-button-container' }, "X"));
};
exports.CancelButton = CancelButton;
//# sourceMappingURL=CancelButton.js.map
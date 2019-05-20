"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ScoreText_1 = require("../common/ScoreText");
require("../../styles/modalcontainer.scss");
const ModalContainer = (props) => {
    return (React.createElement("div", { className: 'container' },
        React.createElement("div", { className: 'sub-container' },
            React.createElement("div", { style: { backgroundColor: props.backgroundColor }, className: 'overlay-ribbon' }, props.stageStatus),
            React.createElement(ScoreText_1.ScoreText, { color: "#c9a881", text: 'Your Score', score: 100 }),
            props.children),
        React.createElement("div", { onClick: props.onClick, className: 'yellow-button-container' },
            React.createElement("div", { className: 'yellow-button-text' }, props.stageButton))));
};
exports.ModalContainer = ModalContainer;
//# sourceMappingURL=ModalConatiner.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("../../styles/modalboxinner.scss");
const ScoreText_1 = require("./ScoreText");
const ModalBoxInner = () => {
    return (React.createElement("div", { className: 'modal-box-inner' },
        React.createElement(ScoreText_1.ScoreText, { color: "#c9a881", text: 'Best Score', score: 100 })));
};
exports.ModalBoxInner = ModalBoxInner;
//# sourceMappingURL=ModalBoxInner.js.map
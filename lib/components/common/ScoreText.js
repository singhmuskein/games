"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("../../styles/scoretext.scss");
const ScoreText = (props) => {
    return (React.createElement("div", { className: 'score-text' },
        React.createElement("div", { style: { color: props.color }, className: 'score-text-string' }, props.text),
        React.createElement("div", { style: { color: props.color }, className: 'score-text-number' }, props.score)));
};
exports.ScoreText = ScoreText;
//# sourceMappingURL=ScoreText.js.map
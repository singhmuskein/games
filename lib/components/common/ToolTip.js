"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const AssetPath_1 = require("../../assets/AssetPath");
require("../../styles/tooltip.scss");
const ToolTip = (props) => {
    return (React.createElement("div", { className: 'tool-tip-container' },
        React.createElement("div", { className: 'img-container' },
            React.createElement("img", { src: AssetPath_1.ASSETS.SNAKE, className: 'image-circle' })),
        React.createElement("div", { className: 'tooltip' },
            React.createElement("div", { className: 'tooltiptext' }, props.tip))));
};
exports.ToolTip = ToolTip;
//# sourceMappingURL=ToolTip.js.map
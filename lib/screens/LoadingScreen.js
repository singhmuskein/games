"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("../styles/loadingscreen.scss");
class LoadingScreen extends React.Component {
    render() {
        return (React.createElement("div", { className: 'loading' },
            React.createElement("div", { className: 'snake-rush-image-container' }, "SNAKE RUSH"),
            React.createElement("div", { className: 'loading-bar-container' }, " LoadingLoadingLoading"),
            React.createElement("div", { className: 'white-text-tip-container', style: { flex: 1, backgroundColor: "red" } },
                React.createElement("div", { className: 'tips-and-tricks-text' }, "Tips & Tricks"),
                React.createElement("div", { className: 'tips-description-text' }, "Try to break as much block as possible score high"))));
    }
}
exports.default = LoadingScreen;
//# sourceMappingURL=LoadingScreen.js.map
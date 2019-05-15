"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Game_1 = require("../Game");
class StageComplete extends React.Component {
    componentDidMount() {
        // new Game();
        Game_1.gameInit();
    }
    render() {
        return React.createElement("div", null, "muskein");
    }
}
exports.default = StageComplete;
//# sourceMappingURL=StageComplete.js.map
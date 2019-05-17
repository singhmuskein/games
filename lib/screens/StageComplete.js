"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("../styles/stagecomplete.scss");
const common_1 = require("../components/common");
class StageComplete extends React.Component {
    // componentDidMount() {
    //   // new Game();
    //   gameInit();
    // }
    render() {
        return (React.createElement("div", { className: 'stage-complete' },
            React.createElement(common_1.Modal, null)));
    }
}
exports.default = StageComplete;
//# sourceMappingURL=StageComplete.js.map
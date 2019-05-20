"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("../styles/stagecomplete.scss");
//import LoadingScreen from "./LoadingScreen";
const common_1 = require("../components/common");
class StageComplete extends React.Component {
    constructor() {
        super(...arguments);
        // componentDidMount() {
        //   // new Game();
        //   gameInit();
        // }
        this.state = { showModal: true };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(common_1.Modal, { isOpen: this.state.showModal, backgroundColor: 'rgb(28,183,150)', stageStatus: 'Stage Failed', stageButton: 'Try Again', tip: 'Lets, try again. You have more chances.', onClick: () => alert("under dev") })));
    }
}
exports.default = StageComplete;
//# sourceMappingURL=StageComplete.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("../styles/stagecomplete.scss");
//import LoadingScreen from "./LoadingScreen";
const common_1 = require("../components/common");
class StageComplete extends React.Component {
    constructor() {
        // componentDidMount() {
        //   // new Game();
        //   gameInit();
        // }
        super(...arguments);
        this.state = { showModal: true };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(common_1.Modal, { isOpen: this.state.showModal },
                React.createElement(common_1.CancelButton, { onClick: () => alert("under dev") }),
                React.createElement("div", { className: 'modal-align-center' },
                    React.createElement(common_1.ModalContainer, { onClick: () => alert("dev"), backgroundColor: 'rgb(28,183,150)', stageStatus: 'Stage Failed', stageButton: 'Try Again' },
                        React.createElement(common_1.ModalBoxInner, null))),
                React.createElement(common_1.ToolTip, { tip: 'Lets, try again. You have more chances.' }))));
    }
}
exports.default = StageComplete;
//# sourceMappingURL=StageComplete.js.map
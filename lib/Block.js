"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Phaser = require("phaser");
const screenWidth = window.innerWidth;
const blockRefs = [];
function makeBlock() {
    const blockProperties = getBlockProperties();
    const block = this.add.rectangle(blockProperties.startingCoordinateX, blockProperties.startingCoordinateY, blockProperties.height, blockProperties.width, Phaser.Display.Color.HexStringToColor(blockProperties.fillColor).color);
    const gameBlockObject = this.physics.add.existing(block, true);
    blockRefs.push(gameBlockObject);
    return blockRefs;
}
exports.makeBlock = makeBlock;
function getBlockProperties() {
    return {
        startingCoordinateX: screenWidth / 2,
        startingCoordinateY: 400,
        fillColor: "#2874f0",
        width: 200,
        height: 200
    };
}
//# sourceMappingURL=Block.js.map
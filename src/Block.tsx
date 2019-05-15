import * as Phaser from "phaser";
const screenWidth = window.innerWidth;
const blockRefs: Phaser.Geom.Rectangle[] = [];
interface BlockProperties {
  width: number;
  height: number;
  startingCoordinateX: number;
  startingCoordinateY: number;
  fillColor: string;
}
export function makeBlock() {
  const blockProperties: BlockProperties = getBlockProperties();
  const block: Phaser.Geom.Rectangle = this.add.rectangle(
    blockProperties.startingCoordinateX,
    blockProperties.startingCoordinateY,
    blockProperties.height,
    blockProperties.width,
    Phaser.Display.Color.HexStringToColor(blockProperties.fillColor).color
  );
  const gameBlockObject: Phaser.Geom.Rectangle = this.physics.add.existing(
    block,
    true
  );
  blockRefs.push(gameBlockObject);
  return blockRefs;
}

function getBlockProperties(): BlockProperties {
  return {
    startingCoordinateX: screenWidth / 2,
    startingCoordinateY: 400,
    fillColor: "#2874f0",
    width: 200,
    height: 200
  };
}

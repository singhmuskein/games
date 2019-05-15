import * as Phaser from "phaser";
export interface SnakeProperties {
  snakeLength: number;
  followOffset: number;
  startingCoordinateX: number;
  startingCoordinateY: number;
  radius: number;
  fillColors: string[];
}
const screenWidth = window.innerWidth;
export function makeSnake(): Phaser.GameObjects.Group {
  // const snakeProperties: SnakeProperties = getSnakeProperties();
  const cells: Phaser.GameObjects.Group = this.physics.add.group(
    {
      key: "cell",
      repeat: 11,
      setXY: {
        x: screenWidth / 2,
        y: 2000,
        stepY: 25
      }
    },
    { setCollideWorldBounds: true }
  );
  cells.children.each((cell: Phaser.GameObjects.GameObject, index: number) => {
    if (index === 0) {
      this.cameras.main.startFollow(cell);
      this.cameras.main.setFollowOffset(-300);
      this.tweens.add({
        targets: cell,
        scaleX: 0.75,
        scaleY: 0.75,
        yoyo: true,
        repeat: -1,
        ease: "Sine.easeInOut"
      });
    }
  });
  return cells;
}

// function getSnakeProperties(): SnakeProperties {
//   return {
//     snakeLength: 6,
//     followOffset: 300,
//     startingCoordinateX: screenWidth / 2,
//     startingCoordinateY: 1080 * 2 - 100,
//     radius: 10,
//     fillColors: ["#2874f0", "#838383", "#000000", "#2874f0", "#876", "#198"]
//   };
// }

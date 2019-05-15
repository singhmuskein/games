import * as Phaser from "phaser";
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
import { makeSnake } from "./Snake";
import { makeBlock } from "./Block";
import { Input } from "phaser";
let isUserDragging = false;
let deltaX = 0,
  deltaY = 0;
export function gameInit() {
  const config: GameConfig = {
    title: "Game",
    type: Phaser.CANVAS,
    width: screenWidth,
    height: screenHeight,
    scene: {
      preload: preload,
      create: create,
      update: update
    },
    physics: {
      default: "arcade",
      arcade: {
        gravity: {
          y: -100
        },
        fps: 60,
        isPaused: false,
        timeScale: 1
      }
    }
  };
  const game = new Phaser.Game(config);
}
function preload() {
  this.load.setBaseURL("http://labs.phaser.io");
  this.load.image("background", "/assets/pics/the-end-by-iloe-and-made.jpg");
  this.load.image("cell", "assets/sprites/x2kship.png");
}

function create() {
  isUserDragging = false;
  this.makeSnake = makeSnake.bind(this);
  this.makeBlock = makeBlock.bind(this);
  this.createDartboard = createDartboard.bind(this);
  this.setPhysicsBounds = setPhysicsBounds.bind(this);
  this.setCameraBounds = setCameraBounds.bind(this);
  this.addCollider = addCollider.bind(this);
  this.setCameraBounds();
  this.setPhysicsBounds();
  this.createDartboard();
  this.snakeRefs = this.makeSnake();
  const blockRefs: Phaser.Physics.Arcade.Body[] = this.makeBlock();
  this.addCollider(this.snakeRefs, blockRefs);
  this.input.on("pointerdown", function(_pointer: Input.Pointer) {
    isUserDragging = true;
  });

  this.input.on("pointerup", function(_pointer: Input.Pointer) {
    isUserDragging = false;
  });

  this.input.on("pointermove", function(pointer: Input.Pointer) {
    if (isUserDragging) {
      deltaX = pointer.position.x - pointer.prevPosition.x;
      deltaY = pointer.position.y - pointer.prevPosition.y;
    }
  });
}

function update() {
  if (isUserDragging && deltaX && deltaY) {
    console.log(isUserDragging, deltaX, deltaY);
  }
  // if (x !== 0 && y !== 0) {
  // Phaser.Actions.ShiftPosition(this.snakeRefs.getChildren(), x, y);
  // }
}

function setGameOver(
  _staticGameObject: Phaser.GameObjects.GameObject,
  _movingGameObject: Phaser.GameObjects.GameObject
) {
  // this.physics.moveTo(movingGameObject, 0, 0, 1, 5000);
}

function addCollider(
  snakeRefs: Phaser.GameObjects.Group,
  blockRefs: Phaser.Physics.Arcade.Body[]
) {
  for (let i = 0; i < blockRefs.length; i++) {
    this.physics.add.collider(blockRefs[i], snakeRefs, setGameOver, null, this);
  }
}

function setPhysicsBounds() {
  this.physics.world.setBounds(0, 0, 1920, 1080 * 3);
}

function setCameraBounds() {
  this.cameras.main.setBounds(0, 0, 1920, 1080 * 3);
}

function createDartboard() {
  this.add.image(0, 0, "background").setOrigin(0);
  this.add.image(0, 1080, "background").setOrigin(0);
  this.add.image(0, 2160, "background").setOrigin(0);
}

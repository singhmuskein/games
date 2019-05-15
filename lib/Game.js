"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Phaser = require("phaser");
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const Snake_1 = require("./Snake");
const Block_1 = require("./Block");
let isUserDragging = false;
let deltaX = 0, deltaY = 0;
function gameInit() {
    const config = {
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
exports.gameInit = gameInit;
function preload() {
    this.load.setBaseURL("http://labs.phaser.io");
    this.load.image("background", "/assets/pics/the-end-by-iloe-and-made.jpg");
    this.load.image("cell", "assets/sprites/x2kship.png");
}
function create() {
    isUserDragging = false;
    this.makeSnake = Snake_1.makeSnake.bind(this);
    this.makeBlock = Block_1.makeBlock.bind(this);
    this.createDartboard = createDartboard.bind(this);
    this.setPhysicsBounds = setPhysicsBounds.bind(this);
    this.setCameraBounds = setCameraBounds.bind(this);
    this.addCollider = addCollider.bind(this);
    this.setCameraBounds();
    this.setPhysicsBounds();
    this.createDartboard();
    this.snakeRefs = this.makeSnake();
    const blockRefs = this.makeBlock();
    this.addCollider(this.snakeRefs, blockRefs);
    this.input.on("pointerdown", function (_pointer) {
        isUserDragging = true;
    });
    this.input.on("pointerup", function (_pointer) {
        isUserDragging = false;
    });
    this.input.on("pointermove", function (pointer) {
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
function setGameOver(_staticGameObject, _movingGameObject) {
    // this.physics.moveTo(movingGameObject, 0, 0, 1, 5000);
}
function addCollider(snakeRefs, blockRefs) {
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
//# sourceMappingURL=Game.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = exports.IDLE_ANIMATON = void 0;
var DIRECTION;
(function (DIRECTION) {
    DIRECTION["left"] = "Left";
    DIRECTION["right"] = "Right";
    DIRECTION["up"] = "Up";
    DIRECTION["down"] = "Down";
})(DIRECTION || (DIRECTION = {}));
var IDLE_ANIMATON;
(function (IDLE_ANIMATON) {
    IDLE_ANIMATON["left"] = "idleLeft";
    IDLE_ANIMATON["right"] = "idleRight";
    IDLE_ANIMATON["up"] = "idleUp";
    IDLE_ANIMATON["down"] = "idleDown";
    IDLE_ANIMATON["prefix"] = "idle";
})(IDLE_ANIMATON = exports.IDLE_ANIMATON || (exports.IDLE_ANIMATON = {}));
const SPEED = 120;
class Player {
    constructor(player) {
        this.player = player;
        this.action();
        this.currentDirection = DIRECTION.down;
    }
    moveRight() {
        this.move(SPEED, 0);
    }
    moveLeft() {
        this.move(-SPEED, 0);
    }
    moveUp() {
        this.move(0, -SPEED);
    }
    moveDown() {
        this.move(0, SPEED);
    }
    animateRunRight() {
        this.play('runRight');
        this.currentDirection = DIRECTION.right;
    }
    animateRunLeft() {
        this.play('runLeft');
        this.currentDirection = DIRECTION.left;
    }
    animateRunUp() {
        this.play('runUp');
        this.currentDirection = DIRECTION.up;
    }
    animateRunDown() {
        this.play('runDown');
        this.currentDirection = DIRECTION.down;
    }
    stayIdle() {
        this.play(IDLE_ANIMATON.prefix + this.currentDirection);
    }
    play(animation) {
        this.player.play(animation);
    }
    move(direction, speed) {
        this.player.move(direction, speed);
    }
    action() {
        this.player.onUpdate(() => {
        });
    }
}
exports.Player = Player;
//# sourceMappingURL=Player.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var DIRECTION;
(function (DIRECTION) {
    DIRECTION["left"] = "Left";
    DIRECTION["right"] = "Right";
    DIRECTION["up"] = "Up";
    DIRECTION["down"] = "Down";
})(DIRECTION || (DIRECTION = {}));
const SPEED = 120;
class Player {
    constructor(player) {
        this.player = player;
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
        this.play("runRight");
        this.currentDirection = DIRECTION.right;
    }
    animateRunLeft() {
        this.play("runLeft");
        this.currentDirection = DIRECTION.left;
    }
    animateRunUp() {
        this.play("runUp");
        this.currentDirection = DIRECTION.up;
    }
    animateRunDown() {
        this.play("runDown");
        this.currentDirection = DIRECTION.down;
    }
    stayIdle() {
        this.play("idle" + this.currentDirection);
    }
    play(animation) {
        this.player.play(animation);
    }
    move(direction, speed) {
        this.player.move(direction, speed);
    }
    action() {
        this.player.action(() => {
            camPos(this.player.pos);
        });
    }
}
exports.Player = Player;
//# sourceMappingURL=Player.js.map
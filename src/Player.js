export const SPEED = 120;
export const DIRECTIONS = {
  left: "Left",
  right: "Right",
  up: "Up",
  down: "Down",
};

export default class Player {
  constructor(player) {
    this.player = player;
    this.currentDirection = DIRECTIONS.down;
    this.action();
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

  move(direction, speed) {
    this.player.move(direction, speed);
  }

  animateRunRight() {
    this.play("runRight");
    this.currentDirection = DIRECTIONS.right;
  }

  animateRunLeft() {
    this.play("runLeft");
    this.currentDirection = DIRECTIONS.left;
  }

  animateRunUp() {
    this.play("runUp");
    this.currentDirection = DIRECTIONS.up;
  }

  animateRunDown() {
    this.play("runDown");
    this.currentDirection = DIRECTIONS.down;
  }

  stayIdle() {
    this.play("idle" + this.currentDirection);
  }

  play(animation) {
    this.player.play(animation);
  }

  action() {
    this.player.action(() => {
      camPos(this.player.pos);
    });
  }
}

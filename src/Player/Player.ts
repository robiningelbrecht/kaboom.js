import { Sprite } from "../Sprite/Sprite";

enum DIRECTION {
  left = "Left",
  right = "Right",
  up = "Up",
  down = "Down",
}

const SPEED = 120;

export class Player {
  private player: any;
  private currentDirection: DIRECTION;

  constructor(player: any) {
    this.player = player;
    this.currentDirection = DIRECTION.down;
  }

  public moveRight(): void {
    this.move(SPEED, 0);
  }

  public moveLeft(): void {
    this.move(-SPEED, 0);
  }

  public moveUp(): void {
    this.move(0, -SPEED);
  }

  public moveDown(): void {
    this.move(0, SPEED);
  }

  public animateRunRight(): void {
    this.play("runRight");
    this.currentDirection = DIRECTION.right;
  }

  public animateRunLeft(): void {
    this.play("runLeft");
    this.currentDirection = DIRECTION.left;
  }

  public animateRunUp(): void {
    this.play("runUp");
    this.currentDirection = DIRECTION.up;
  }

  public animateRunDown(): void {
    this.play("runDown");
    this.currentDirection = DIRECTION.down;
  }

  public stayIdle(): void {
    this.play("idle" + this.currentDirection);
  }

  private play(animation: string): void {
    this.player.play(animation);
  }

  private move(direction: number, speed: number): void {
    this.player.move(direction, speed);
  }

  public action() {
    this.player.action(() => {
      camPos(this.player.pos);
    });
  }
}

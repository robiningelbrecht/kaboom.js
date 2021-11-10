enum DIRECTION {
  left = 'Left',
  right = 'Right',
  up = 'Up',
  down = 'Down',
}

export enum IDLE_ANIMATON {
  left = 'idleLeft',
  right = 'idleRight',
  up = 'idleUp',
  down = 'idleDown',
  prefix = 'idle'
}

const SPEED = 120;

export class Player {
  private player: any;
  private currentDirection: DIRECTION;

  constructor(player: any) {
    this.player = player;
    this.action();
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
    this.play('runRight');
    this.currentDirection = DIRECTION.right;
  }

  public animateRunLeft(): void {
    this.play('runLeft');
    this.currentDirection = DIRECTION.left;
  }

  public animateRunUp(): void {
    this.play('runUp');
    this.currentDirection = DIRECTION.up;
  }

  public animateRunDown(): void {
    this.play('runDown');
    this.currentDirection = DIRECTION.down;
  }

  public stayIdle(): void {
    this.play(IDLE_ANIMATON.prefix + this.currentDirection);
  }

  private play(animation: string): void {
    this.player.play(animation);
  }

  private move(direction: number, speed: number): void {
    this.player.move(direction, speed);
  }

  private action() {
    this.player.onUpdate(() => {
      // Set the viewport center to player.pos
      // camPos(this.player.pos);
    });
  }
}

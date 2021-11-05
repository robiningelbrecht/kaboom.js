import kaboom, { KaboomOpt } from "kaboom";
import { Level } from "../Level/Level";
import { Player } from "../Player/Player";
import { Sprite } from "../Sprite/Sprite";

export const SCENE = "main";

export class Game {
  private kaboom: KaboomOpt;
  private startLevel: Level;
  private levels: Array<Level>;
  private sprites: Array<Sprite>;
  private player!: Player;

  constructor(
    kaboom: KaboomOpt,
    startLevel: Level,
    levels: Array<Level>,
    sprites: Array<Sprite>
  ) {
    this.kaboom = kaboom;
    this.startLevel = startLevel;
    this.levels = levels;
    this.sprites = sprites;
  }

  public initialize(): void {
    kaboom(this.kaboom);

    this.loadSprites();
  }

  public render(): void {
    this.renderLevel(this.startLevel);
  }

  private loadSprites(): void {
    this.sprites.forEach((sprite: Sprite) =>
      loadSpriteAtlas(sprite.getImgSource(), sprite.getJsonDefinition())
    );
  }

  private renderLevel(level: Level): void {
    scene(SCENE, () => {
      level.render();

      this.player = new Player(
        add([
          pos(level.getInitialPlayerPosition()),
          sprite("player", { anim: level.getInitialPlayerAnimation() }),
          area(),
          solid(),
        ])
      );
      this.player.action();

      keyDown("right", () => {
        this.player.moveRight();
      });

      keyDown("left", () => {
        this.player.moveLeft();
      });

      keyDown("up", () => {
        this.player.moveUp();
      });

      keyDown("down", () => {
        this.player.moveDown();
      });

      keyPress("right", () => {
        this.player.animateRunRight();
      });

      keyPress("left", () => {
        this.player.animateRunLeft();
      });

      keyPress("up", () => {
        this.player.animateRunUp();
      });

      keyPress("down", () => {
        this.player.animateRunDown();
      });

      keyRelease(["left", "right", "up", "down"], () => {
        if (
          !keyIsDown("left") &&
          !keyIsDown("right") &&
          !keyIsDown("up") &&
          !keyIsDown("down")
        ) {
          this.player.stayIdle();
        } else {
          if (keyIsDown("left")) {
            this.player.animateRunLeft();
          }
          if (keyIsDown("right")) {
            this.player.animateRunRight();
          }
          if (keyIsDown("up")) {
            this.player.animateRunUp();
          }
          if (keyIsDown("down")) {
            this.player.animateRunDown();
          }
        }
      });

      keyPress("f", () => {
        fullscreen(!isFullscreen());
      });

      keyPress("space", () => {
        this.renderLevel(this.levels[1]);
      });
    });

    go(SCENE);
  }
}

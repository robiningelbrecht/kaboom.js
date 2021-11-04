import kaboom from "kaboom";
import { Player } from "./Player";

export const START_SCENE = "overworld";

export class Game {
  private kaboom: any;
  private startLevel: string;
  private levels: Array<string>;
  private sprites: Array<string>;
  private player: Player;

  constructor(kaboom: any, startLevel: string, levels: Array<string>, sprites: Array<string>, player: Player) {
    this.kaboom = kaboom
    this.startLevel = startLevel;
    this.levels = levels;
    this.sprites = sprites;
    this.player = player;
  }

  public initialize(): void{
    kaboom(this.kaboom);

    this.loadSprites();
    this.importScenes();
  }

  public getPlayer(): Player {
    return this.player;
  }

  public start(): void {
    this.goToScene(START_SCENE);
  }

  private loadSprites(): void {
    // Terrain.
    loadSpriteAtlas(
      "assets/16x16-game-assets/tiles/1_terrain.png",
      "src/sprites/terrain.json"
    );

    //Player.
    loadSpriteAtlas(
      "assets/16x16-game-assets/tiles/14_human_sprite_base.png",
      "src/sprites/player.json"
    );
  }

  private importScenes(): void {
    scene(START_SCENE, () => {
      let map = addLevel(
        [
          "                                 ",
          "                                 ",
          "                                 ",
          "                                 ",
          "                                 ",
          "                                 ",
          "                                 ",
          "                                 ",
          "                                 ",
          "                                 ",
          "                                 ",
          "                                 ",
          "                                 ",
          "                                 ",
          "                                 ",
          "                                 ",
          "                                 ",
          "                                 ",
          "                                 ",
          "                                 ",
          "                                 ",
          "                                 ",
          "                                 ",
          "                                 ",
          "                                 ",
          "                                 ",
          "                                 ",
          "                                 ",
          "                                 ",
        ],
        {
          width: 64,
          height: 32,
          " ": () => [sprite("grass_dark")],
        }
      );

      this.player = new Player(
        add([
          pos(map.getPos(20, 12)),
          sprite("player", { anim: "idleDown" }),
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
        }else{
          if(keyIsDown("left")){
            this.player.animateRunLeft();
          }
          if(keyIsDown("right")){
            this.player.animateRunRight();
          }
          if(keyIsDown("up")){
            this.player.animateRunUp();
          }
          if(keyIsDown("down")){
            this.player.animateRunDown();
          }
        }
      });

      keyPress("f", () => {
        fullscreen(!isFullscreen());
      });
    });
  }

  public goToScene(scene: string) {
    go(scene);
  }
}

import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";
import Player from "./Player.js";

export const START_SCENE = "overworld";

export default class Game {
  constructor() {
    this.player = null;
  }

  getPlayer() {
    return this.player;
  }

  initialize() {
    // initialize kaboom context
    kaboom({
      scale: 1,
      background: [0, 0, 0],
      clearColor: [0, 0, 0, 1],
    });
  }

  start() {
    go(START_SCENE);
  }

  loadSprites() {
    // Terrain.
    loadSpriteAtlas(
      "assets/16x16-game-assets/tiles/1_terrain.png",
      "game/sprites/terrain.json"
    );

    //Player.
    loadSpriteAtlas(
      "assets/16x16-game-assets/tiles/14_human_sprite_base.png",
      "game/sprites/player.json"
    );
  }

  importScenes() {
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
          origin("center"),
        ])
      );

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
        this.player.runRight();
      });

      keyPress("left", () => {
        this.player.runLeft();
      });

      keyPress("up", () => {
        this.player.runUp();
      });

      keyPress("down", () => {
        this.player.runDown();
      });

      keyRelease(["left", "right", "up", "down"], () => {
        if (
          !keyIsDown("left") &&
          !keyIsDown("right") &&
          !keyIsDown("up") &&
          !keyIsDown("down")
        ) {
          this.player.stayIdle();
        }
      });

      keyPress("f", (c) => {
        fullscreen(!isFullscreen());
      });
    });
  }
}

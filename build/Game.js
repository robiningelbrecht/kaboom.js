"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = exports.START_SCENE = void 0;
const kaboom_1 = require("kaboom");
const Player_1 = require("./Player");
exports.START_SCENE = "overworld";
class Game {
    constructor(kaboom, startLevel, levels, sprites, player) {
        this.kaboom = kaboom;
        this.startLevel = startLevel;
        this.levels = levels;
        this.sprites = sprites;
        this.player = player;
    }
    initialize() {
        (0, kaboom_1.default)(this.kaboom);
        this.loadSprites();
        this.importScenes();
    }
    getPlayer() {
        return this.player;
    }
    start() {
        this.goToScene(exports.START_SCENE);
    }
    loadSprites() {
        loadSpriteAtlas("assets/16x16-game-assets/tiles/1_terrain.png", "src/sprites/terrain.json");
        loadSpriteAtlas("assets/16x16-game-assets/tiles/14_human_sprite_base.png", "src/sprites/player.json");
    }
    importScenes() {
        scene(exports.START_SCENE, () => {
            let map = addLevel([
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
            ], {
                width: 64,
                height: 32,
                " ": () => [sprite("grass_dark")],
            });
            this.player = new Player_1.Player(add([
                pos(map.getPos(20, 12)),
                sprite("player", { anim: "idleDown" }),
                area(),
                solid(),
            ]));
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
                if (!keyIsDown("left") &&
                    !keyIsDown("right") &&
                    !keyIsDown("up") &&
                    !keyIsDown("down")) {
                    this.player.stayIdle();
                }
                else {
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
        });
    }
    goToScene(scene) {
        go(scene);
    }
}
exports.Game = Game;
//# sourceMappingURL=Game.js.map
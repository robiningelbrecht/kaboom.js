"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = exports.SCENE = void 0;
const kaboom_1 = require("kaboom");
const AudioPlayer_1 = require("../Sound/AudioPlayer");
const Player_1 = require("../Player/Player");
exports.SCENE = "main";
class Game {
    constructor(kaboom, startLevel, levels, sprites, sound) {
        this.kaboom = kaboom;
        this.startLevel = startLevel;
        this.levels = levels;
        this.sprites = sprites;
        this.sound = sound;
    }
    initialize() {
        (0, kaboom_1.default)(this.kaboom);
        this.loadSprites();
        this.loadSound();
    }
    loadSprites() {
        this.sprites.forEach((sprite) => loadSpriteAtlas(sprite.getImgSource(), sprite.getJsonDefinition()));
    }
    loadSound() {
        this.sound.forEach((sound) => loadSound(sound.getName(), sound.getLocation()));
    }
    render() {
        const backgroundMusic = new AudioPlayer_1.AudioPlayer(play("background", {
            volume: 0.1,
            loop: true,
        }));
        backgroundMusic.play();
        this.renderLevel(this.startLevel);
    }
    renderLevel(level) {
        scene(exports.SCENE, () => {
            level.render();
            this.player = new Player_1.Player(add([
                pos(level.getInitialPlayerPosition()),
                sprite("player", { anim: level.getInitialPlayerAnimation() }),
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
            keyPress("space", () => {
                this.player.pauseFootstepSound();
                this.renderLevel(this.levels[1]);
            });
        });
        go(exports.SCENE);
    }
}
exports.Game = Game;
//# sourceMappingURL=Game.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = exports.SCENE = void 0;
const kaboom_1 = require("kaboom");
const Player_1 = require("../Player/Player");
exports.SCENE = 'main';
class Game {
    constructor(kaboom, startLevel, levels, sprites, audioColletion) {
        this.kaboom = kaboom;
        this.startLevel = startLevel;
        this.levels = levels;
        this.sprites = sprites;
        this.audioColletion = audioColletion;
    }
    initialize() {
        (0, kaboom_1.default)(this.kaboom);
        this.loadSprites();
        this.loadAudio();
    }
    loadSprites() {
        this.sprites.forEach((sprite) => loadSpriteAtlas(sprite.getImgSource(), sprite.getJsonDefinition()));
    }
    loadAudio() {
        for (const audioFile of this.audioColletion.all()) {
            audioFile.load();
        }
    }
    render() {
        this.renderLevel(this.startLevel);
    }
    renderLevel(level) {
        scene(exports.SCENE, () => {
            level.render();
            const footstepsAudio = this.audioColletion.get('footsteps');
            this.player = new Player_1.Player(add([
                pos(level.getInitialPlayerPosition()),
                sprite('player', { anim: level.getInitialPlayerAnimation() }),
                area(),
                solid(),
            ]));
            this.player.action();
            keyDown('right', () => {
                footstepsAudio.play();
                this.player.moveRight();
            });
            keyDown('left', () => {
                footstepsAudio.play();
                this.player.moveLeft();
            });
            keyDown('up', () => {
                footstepsAudio.play();
                this.player.moveUp();
            });
            keyDown('down', () => {
                footstepsAudio.play();
                this.player.moveDown();
            });
            keyPress('right', () => {
                this.player.animateRunRight();
            });
            keyPress('left', () => {
                this.player.animateRunLeft();
            });
            keyPress('up', () => {
                this.player.animateRunUp();
            });
            keyPress('down', () => {
                this.player.animateRunDown();
            });
            keyRelease(['left', 'right', 'up', 'down'], () => {
                if (!keyIsDown('left') &&
                    !keyIsDown('right') &&
                    !keyIsDown('up') &&
                    !keyIsDown('down')) {
                    footstepsAudio.stop();
                    this.player.stayIdle();
                }
                else {
                    if (keyIsDown('left')) {
                        this.player.animateRunLeft();
                    }
                    if (keyIsDown('right')) {
                        this.player.animateRunRight();
                    }
                    if (keyIsDown('up')) {
                        this.player.animateRunUp();
                    }
                    if (keyIsDown('down')) {
                        this.player.animateRunDown();
                    }
                }
            });
            keyPress('f', () => {
                fullscreen(!isFullscreen());
            });
            keyPress('space', () => {
                footstepsAudio.stop();
                this.renderLevel(this.levels[1]);
            });
        });
        go(exports.SCENE);
    }
}
exports.Game = Game;
//# sourceMappingURL=Game.js.map
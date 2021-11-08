"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameBuilder = void 0;
const Game_1 = require("./Game");
class GameBuilder {
    constructor() {
        this.kaboom = {
            scale: 1,
            background: [0, 0, 0],
        };
        this.startLevel = null;
        this.levels = [];
        this.sprites = [];
        this.sound = [];
    }
    static fromDefaults() {
        return new GameBuilder();
    }
    withKaboom(kaboomOpt) {
        this.kaboom = kaboomOpt;
        return this;
    }
    withLevels(levels) {
        this.levels = levels;
        return this;
    }
    withStartLevel(level) {
        this.startLevel = level;
        return this;
    }
    withSprites(sprites) {
        this.sprites = sprites;
        return this;
    }
    withSound(sound) {
        this.sound = sound;
        return this;
    }
    build() {
        if (this.startLevel === null) {
            throw Error('Cannot build game without start level');
        }
        if (this.levels.length < 1) {
            throw Error('Cannot build game without levels');
        }
        return new Game_1.Game(this.kaboom, this.startLevel, this.levels, this.sprites, this.sound);
    }
}
exports.GameBuilder = GameBuilder;
//# sourceMappingURL=GameBuilder.js.map
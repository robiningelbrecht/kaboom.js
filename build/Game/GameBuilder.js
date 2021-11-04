"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameBuilder = void 0;
const Game_1 = require("./Game");
class GameBuilder {
    constructor() {
        this.kaboom = {
            scale: 5,
            background: [0, 0, 0],
            clearColor: [0, 0, 0, 1],
        };
        this.startLevel = "test";
        this.levels = [];
        this.sprites = [];
        this.player = null;
    }
    static fromDefaults() {
        return new GameBuilder();
    }
    withLevels(levels) {
        this.levels = levels;
        return this;
    }
    withSprites(sprites) {
        this.sprites = sprites;
        return this;
    }
    withPlayer(player) {
        this.player = player;
        return this;
    }
    build() {
        if (!this.player) {
            throw new Error('Cannot build game without a player');
        }
        return new Game_1.Game(this.kaboom, this.startLevel, this.levels, this.sprites, this.player);
    }
}
exports.GameBuilder = GameBuilder;
//# sourceMappingURL=GameBuilder.js.map
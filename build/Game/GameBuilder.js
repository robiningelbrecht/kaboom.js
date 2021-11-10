"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameBuilder = void 0;
const Game_1 = require("./Game");
class GameBuilder {
    constructor() {
        this.startLevel = null;
        this.levels = [];
    }
    static fromDefaults() {
        return new GameBuilder();
    }
    withLevels(levels) {
        this.levels = levels;
        return this;
    }
    withStartLevel(level) {
        this.startLevel = level;
        return this;
    }
    withAudioCollection(audioCollection) {
        this.audioCollection = audioCollection;
        return this;
    }
    build() {
        if (this.startLevel === null) {
            throw debug.error('Cannot build game without start level');
        }
        if (this.levels.length < 1) {
            throw debug.error('Cannot build game without levels');
        }
        return new Game_1.Game(this.startLevel, this.levels, this.audioCollection);
    }
}
exports.GameBuilder = GameBuilder;
//# sourceMappingURL=GameBuilder.js.map
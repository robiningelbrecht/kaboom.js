import Game from "./Game.js";

export default class GameBuilder {
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
    return new Game(this.kaboom, this.startLevel, this.levels, this.sprites, this.player);
  }
}

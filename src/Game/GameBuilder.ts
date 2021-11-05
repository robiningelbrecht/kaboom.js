import { Game } from "./Game";
import { Sprite } from "../Sprite/Sprite";
import { Level } from "../Level/Level";
import { KaboomOpt } from "kaboom";

export class GameBuilder {
  private kaboom: KaboomOpt;
  private startLevel: Level | null;
  private levels: Array<Level>;
  private sprites: Array<Sprite>;

  constructor() {
    this.kaboom = {
      scale: 5,
      background: [0, 0, 0]
    };
    this.startLevel = null;
    this.levels = [];
    this.sprites = [];
  }

  public static fromDefaults(): GameBuilder {
    return new GameBuilder();
  }

  public withKaboom(kaboomOpt: KaboomOpt): GameBuilder {
    this.kaboom = kaboomOpt;
    return this;
  }

  public withLevels(levels: Array<Level>): GameBuilder {
    this.levels = levels;

    return this;
  }

  public withStartLevel(level: Level): GameBuilder {
    this.startLevel = level;

    return this;
  }

  public withSprites(sprites: Array<Sprite>): GameBuilder {
    this.sprites = sprites;

    return this;
  }

  public build(): Game {
    if (!this.startLevel) {
      throw Error("Cannot build game without start level");
    }
    return new Game(this.kaboom, this.startLevel, this.levels, this.sprites);
  }
}

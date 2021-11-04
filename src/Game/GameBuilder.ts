import { Game } from "./Game";
import { Player } from "../Player/Player.js";
import { Sprite } from "../Sprite/Sprite";
import kaboom from "kaboom";

export class GameBuilder {
  private kaboom: any;
  private startLevel: string;
  private levels: Array<string>;
  private sprites: Array<Sprite>;
  private player: Player|null;

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

  public static fromDefaults(): GameBuilder {
    return new GameBuilder();
  }

  public withLevels(levels: Array<string>): GameBuilder {
    this.levels = levels;

    return this;
  }

  public withSprites(sprites: Array<Sprite>): GameBuilder {
    this.sprites = sprites;

    return this;
  }

  public withPlayer(player: Player): GameBuilder {
    this.player = player;

    return this;
  }

  public build(): Game {
    if(!this.player){
      throw new Error('Cannot build game without a player');
    }
    return new Game(this.kaboom, this.startLevel, this.levels, this.sprites, this.player);
  }
}

import { AudioCollection } from '../Audio/AudioCollection';
import { Game } from './Game';
import { KaboomOpt } from 'kaboom';
import { Level } from '../Level/Level';
import { Sprite } from '../Sprite/Sprite';
export class GameBuilder {
  private kaboom: KaboomOpt;
  private startLevel: Level | null;
  private levels: Array<Level>;
  private sprites: Array<Sprite>;
  private audioCollection!: AudioCollection;

  constructor() {
    this.kaboom = {
      scale: 1,
      background: [0, 0, 0],
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

  public withAudioCollection(audioCollection: AudioCollection): GameBuilder {
    this.audioCollection = audioCollection;

    return this;
  }

  public build(): Game {
    if (this.startLevel === null) {
      throw Error('Cannot build game without start level');
    }
    if (this.levels.length < 1) {
      throw Error('Cannot build game without levels');
    }
    return new Game(this.kaboom, this.startLevel, this.levels, this.sprites, this.audioCollection);
  }
}

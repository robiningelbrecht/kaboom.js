import { AudioCollection } from '../Audio/AudioCollection';
import { Game } from './Game';
import { Level } from '../Level/Level';
export class GameBuilder {
  private startLevel: Level | null;
  private levels: Array<Level>;
  private audioCollection!: AudioCollection;

  constructor() {
    this.startLevel = null;
    this.levels = [];
  }

  public static fromDefaults(): GameBuilder {
    return new GameBuilder();
  }

  public withLevels(levels: Array<Level>): GameBuilder {
    this.levels = levels;

    return this;
  }

  public withStartLevel(level: Level): GameBuilder {
    this.startLevel = level;

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
    return new Game(this.startLevel, this.levels, this.audioCollection);
  }
}

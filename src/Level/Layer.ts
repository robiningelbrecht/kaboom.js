import { LevelOpt } from 'kaboom';

export class Layer {
  private map: Array<string>;
  private layerOpt: LevelOpt;

  constructor(map: Array<string>, layerOpt: LevelOpt) {
    this.map = map;
    this.layerOpt = layerOpt;
  }

  getMap(): string[] {
    return this.map;
  }

  getOptions(): LevelOpt {
    return this.layerOpt;
  }
}

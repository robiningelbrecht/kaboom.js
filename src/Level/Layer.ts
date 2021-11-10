import { LevelOpt } from 'kaboom';

export class Layer {
  private map: Array<string>;
  private layerOpt: LevelOpt;

  constructor(map: Array<string>, layerOpt: LevelOpt) {
    this.map = map;
    this.layerOpt = layerOpt;
  }

  public getMap(): string[] {
    return this.map;
  }

  public getOptions(): LevelOpt {
    return this.layerOpt;
  }

  public hasEqualSize(layer: Layer): boolean {
    return this.getMap().length === layer.getMap().length
    && this.getMap()[0].length === layer.getMap()[0].length;
  }
}

import { Level as KaboomLevel, Vec2 } from 'kaboom';
import { IDLE_ANIMATON } from '../Player/Player';
import { Layer } from './Layer';

export abstract class Level {
  private baseLayer!: KaboomLevel;

  public render(): void {
    // Validate that all layers have the same map size as base layer.
    for (const layer of this.getLayers()) {
      if(!layer.hasEqualSize(this.getBaseLayer())){
        debug.error('All layers must have the same map size as the base layer');
      }
    }

    this.baseLayer = addLevel(
      this.getBaseLayer().getMap(), 
      {...this.getBaseLayer().getOptions(), pos: this.calculateLayerPosition()}
    );

    this.getLayers().forEach((layer: Layer) =>
      addLevel(
        layer.getMap(), 
        {...layer.getOptions(), pos: this.calculateLayerPosition()}
      )
    );
  }

  public getMap(): KaboomLevel{
    return this.baseLayer;
  }

  private calculateLayerPosition(): Vec2{
    const numberOfTilesX = this.getBaseLayer().getMap()[0].length;
    const widthOfTile = this.getBaseLayer().getOptions().width;

    const numberOfTilesY =  this.getBaseLayer().getMap().length;
    const heightOfTile = this.getBaseLayer().getOptions().width;
    
    return vec2(
      (width() - (numberOfTilesX * widthOfTile)) / 2, 
      (height() - (numberOfTilesY * heightOfTile)) / 2
    );
  }

  protected abstract getBaseLayer(): Layer;
  protected abstract getLayers(): Array<Layer>;
  public abstract getInitialPlayerPosition(): Vec2;
  public abstract getInitialPlayerAnimation(): IDLE_ANIMATON;
}

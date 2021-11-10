import { IDLE_ANIMATON } from '../Player/Player';
import { Layer } from './Layer';
import { Level } from './Level';
import { Vec2 } from 'kaboom';

export class Outdoor extends Level {
  public getInitialPlayerPosition(): Vec2 {
    return vec2(10, 2);
  }

  public getInitialPlayerAnimation(): IDLE_ANIMATON {
    return IDLE_ANIMATON.down;
  }

  protected getBaseLayer(): Layer{
    return new Layer([
      'atttttttttttttttttttb',
      'l                   r',
      'l                   r',
      'l                   r',
      'l                   r',
      'l                   r',
      'l                   r',
      'ceeeeeeeeeeeeeeeeeeed',
    ],
    {
      width: 16,
      height: 16,
      ' ': () => [sprite('grass')],
      'a': () => [sprite('grass_border_top_left'), solid(), area({ width: 1, height: 1 })],
      'b': () => [sprite('grass_border_top_right'), solid(), area({ width: 1, height: 1, offset: vec2(15, 0) })],
      'c': () => [sprite('grass_border_bottom_left'), solid(), area({ width: 1, height: 1, offset: vec2(0, 15) })],
      'd': () => [sprite('grass_border_bottom_right'), solid(), area({ width: 1, height: 1, offset: vec2(15, 15) })],
      'l': () => [sprite('grass_border_left'), solid(), area({ width: 1 })],
      'r': () => [sprite('grass_border_right'), solid(), area({ width: 1, offset: vec2(15, 0) })],
      't': () => [sprite('grass_border_top'), solid(), area({ height: 1 })],
      'e': () => [sprite('grass_border_bottom'), solid(), area({ height: 1, offset: vec2(0, 15) })],
    }
    );
  }

  protected getLayers(): Layer[] {
    return [];
  }
}

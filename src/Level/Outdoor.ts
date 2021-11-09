import { IDLE_ANIMATON } from '../Player/Player';
import { Layer } from './Layer';
import { Level } from './Level';
import { Vec2 } from 'kaboom';

export class Outdoor extends Level {
  public getInitialPlayerPosition(): Vec2 {
    return vec2(100, 100);
  }

  public getInitialPlayerAnimation(): IDLE_ANIMATON {
    return IDLE_ANIMATON.down;
  }

  protected getLayers(): Layer[] {


    return [
      // Base layer. Only contains water
     
      new Layer([
        'attttb',
        'l    r',
        'l    r',
        'ceeeed',
      ],
      {
        width: 16,
        height: 16,
        ' ': () => [sprite('grass')],
        'a': () => [sprite('grass_border_top_left'), solid(), area()],
        'b': () => [sprite('grass_border_top_right'), solid(), area()],
        'c': () => [sprite('grass_border_bottom_left'), solid(), area()],
        'd': () => [sprite('grass_border_bottom_right'), solid(), area()],
        'l': () => [sprite('grass_border_left'), solid(), area({ width: 1 })],
        'r': () => [sprite('grass_border_right'), solid(), area({ width: 1, offset: vec2(15, 0) })],
        't': () => [sprite('grass_border_top'), solid(), area()],
        'e': () => [sprite('grass_border_bottom'), solid(), area()],
      }
      ),
    ];
  }
}

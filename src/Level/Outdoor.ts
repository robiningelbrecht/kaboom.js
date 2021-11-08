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
      new Layer(
        [
          '                                 ',
          '                                 ',
          '                                 ',
          '                                 ',
          '                                 ',
          '                                 ',
          '                                 ',
          '                                 ',
          '                                 ',
          '                                 ',
          '                                 ',
          '                                 ',
          '                                 ',
          '                                 ',
          '                xx               ',
          '                                 ',
          '                                 ',
          '                                 ',
          '                                 ',
          '                                 ',
          '                                 ',
          '                                 ',
          '                                 ',
          '                                 ',
          '                                 ',
          '                                 ',
          '                                 ',
          '                                 ',
          '                                 ',
        ],
        {
          width: 64,
          height: 32,
          ' ': () => [sprite('grass_dark')],
          x: () => [sprite('grass_light')],
        }
      ),
    ];
  }
}

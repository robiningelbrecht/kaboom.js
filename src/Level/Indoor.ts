import { IDLE_ANIMATON } from '../Player/Player';
import { Layer } from './Layer';
import { Level } from './Level';
import { Vec2 } from 'kaboom';

export class Indoor extends Level {
  public getInitialPlayerPosition(): Vec2 {
    return vec2(0, 0);
  }

  public getInitialPlayerAnimation(): IDLE_ANIMATON {
    return IDLE_ANIMATON.up;
  }

  protected getBaseLayer(): Layer{
    return new Layer(
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
        '                                 ',
      ],
      {
        width: 64,
        height: 32,
        ' ': () => [sprite('grass_light')],
      }
    );
  }


  protected getLayers(): Layer[] {
    return [];
  }
}

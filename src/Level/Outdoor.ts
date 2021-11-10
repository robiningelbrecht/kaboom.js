import { IDLE_ANIMATON } from '../Player/Player';
import { Layer } from './Layer';
import { Level } from './Level';
import { Vec2 } from 'kaboom';

export class Outdoor extends Level {
  public getInitialPlayerPosition(): Vec2 {
    return vec2(0, 0);
  }

  public getInitialPlayerAnimation(): IDLE_ANIMATON {
    return IDLE_ANIMATON.down;
  }

  protected getBaseLayer(): Layer{
    return new Layer(
      [
        'l----------------------------------------r',
        'l----------------------------------------r',
        'ceeeeeeeeeeeeeeeeeeeeb-------------------r',
        '123232323232323232323l-------------------r',
        '567676767676767676767l-------------------r',
        '(:/:/:/:/:/:/:/:/:/:/l-------------------r',
        '                     l-------------------r',
        '                     l-------------------r',
        '                     ceeeeeeeeeeeeeeeeeeed',
        '                     123232323232323232324',
        '                     567676767676767676768',
        '                     (:/:/:/:/:/:/:/:/:/:)',
      ],
      {
        width: 16,
        height: 16,
        '-': () => [sprite('grass')],
        'a': () => [sprite('grass_border_top_left'), solid(), area({ width: 1, height: 1 })],
        'b': () => [sprite('grass_border_top_right'), solid(), area({ width: 1, height: 1, offset: vec2(15, 0) })],
        'c': () => [sprite('grass_border_bottom_left'), solid(), area({ width: 1, height: 1, offset: vec2(0, 15) })],
        'd': () => [sprite('grass_border_bottom_right'), solid(), area({ width: 1, height: 1, offset: vec2(15, 15) })],
        'l': () => [sprite('grass_border_left'), solid(), area({ width: 1 })],
        'r': () => [sprite('grass_border_right'), solid(), area({ width: 1, offset: vec2(15, 0) })],
        't': () => [sprite('grass_border_top'), solid(), area({ height: 1 })],
        'e': () => [sprite('grass_border_bottom'), solid(), area({ height: 1, offset: vec2(0, 15) })],
        '1': () => [sprite('wall_variation1', { frame: 0 })],
        '2': () => [sprite('wall_variation1', { frame: 1 })],
        '3': () => [sprite('wall_variation1', { frame: 2 })],
        '4': () => [sprite('wall_variation1', { frame: 3 })],
        '5': () => [sprite('wall_variation1', { frame: 4 })],
        '6': () => [sprite('wall_variation1', { frame: 5 })],
        '7': () => [sprite('wall_variation1', { frame: 6 })],
        '8': () => [sprite('wall_variation1', { frame: 7 })],
        '(': () => [sprite('wall_variation1', { frame: 8 })],
        ':': () => [sprite('wall_variation1', { frame: 9 })],
        '/': () => [sprite('wall_variation1', { frame: 10 })],
        ')': () => [sprite('wall_variation1', { frame: 11 })],
      }
    );
  }

  protected getLayers(): Layer[] {
    return [];
  }
}

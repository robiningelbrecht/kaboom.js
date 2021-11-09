import { Sprite } from './Sprite';

export class SpriteCollection {
  public static load(): Array<Sprite> {
    return [
      // Player sprite.
      new Sprite(
        'assets/game-assets/14_human_sprite_base.png',
        'assets/sprites/player.json'
      ),
      // Terrain sprite.
      new Sprite(
        'assets/game-assets/1_terrain.png',
        'assets/sprites/terrain.json'
      ),
    ];
  }
}

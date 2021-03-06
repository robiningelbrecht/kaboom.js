import { Sprite } from './Sprite';

export class SpriteCollection {
  public static load(): Array<Sprite> {
    return [
      // Player sprite.
      new Sprite(
        'assets/game-assets/2_human_sprite_base.png',
        'assets/sprites/player.json'
      ),
      // Grass sprite.
      new Sprite(
        'assets/game-assets/1_terrain.png',
        'assets/sprites/grass.json'
      ),
      // Wall sprite.
      new Sprite(
        'assets/game-assets/1_terrain.png',
        'assets/sprites/wall.json'
      ),
    ];
  }
}

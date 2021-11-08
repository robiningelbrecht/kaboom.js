import { GameBuilder } from './Game/GameBuilder';
import { Indoor } from './Level/Indoor';
import { Outdoor } from './Level/Outdoor';
import { SoundCollection } from './Sound/SoundCollection';
import { SpriteCollection } from './Sprite/SpriteCollection';

const startLevel = new Outdoor();
const levels = [startLevel, new Indoor()];
const game = GameBuilder.fromDefaults()
  .withKaboom({
    scale: 1.5,
    background: [0, 0, 0],
  })
  .withLevels(levels)
  .withStartLevel(startLevel)
  .withSprites(SpriteCollection.get())
  .withSound(SoundCollection.get())
  .build();

game.initialize();
game.render();

import { AudioCollection } from './Audio/AudioCollection';
import { GameBuilder } from './Game/GameBuilder';
import { Indoor } from './Level/Indoor';
import { Outdoor } from './Level/Outdoor';
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
  .withAudioCollection(new AudioCollection())
  .build();

game.initialize();
game.render();

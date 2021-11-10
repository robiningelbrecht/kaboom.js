import { AudioCollection } from './Audio/AudioCollection';
import { GameBuilder } from './Game/GameBuilder';
import { Indoor } from './Level/Indoor';
import { Outdoor } from './Level/Outdoor';
import { SpriteCollection } from './Sprite/SpriteCollection';
import kaboom from 'kaboom';

// Initialize kaboom.
kaboom({
  scale: 1.5,
  background: [42, 38, 52],
  debug: true,
  crisp: true
});
debug.inspect = false;

// Load sprites.
SpriteCollection.load();

// Build and render game.
const startLevel = new Outdoor();
const levels = [startLevel, new Indoor()];
const game = GameBuilder.fromDefaults()
  .withLevels(levels)
  .withStartLevel(startLevel)
  .withAudioCollection(new AudioCollection())
  .build();

game.render();

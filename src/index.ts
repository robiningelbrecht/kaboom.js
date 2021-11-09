import { AudioCollection } from './Audio/AudioCollection';
import { GameBuilder } from './Game/GameBuilder';
import { Indoor } from './Level/Indoor';
import { Outdoor } from './Level/Outdoor';
import { SpriteCollection } from './Sprite/SpriteCollection';
import kaboom from 'kaboom';

// Initialize kabboom.
kaboom({
  scale: 1.5,
  background: [0, 0, 0],
});

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

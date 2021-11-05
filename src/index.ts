import { GameBuilder } from "./Game/GameBuilder";
import { Outdoor } from "./Level/Outdoor";
import { Indoor } from "./Level/Indoor";
import { SpriteCollection } from "./Sprite/SpriteCollection";

const startLevel = new Outdoor();
const levels = [startLevel, new Indoor()];
const game = GameBuilder.fromDefaults()
  .withKaboom({
    scale: 2,
    background: [0, 0, 0],
  })
  .withLevels(levels)
  .withStartLevel(startLevel)
  .withSprites(SpriteCollection.get())
  .build();

game.initialize();
game.render();

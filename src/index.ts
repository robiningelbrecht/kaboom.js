import { GameBuilder } from "./Game/GameBuilder";
import { Player } from "./Player/Player";
import { Sprite } from "./Sprite/Sprite";

const game = GameBuilder.fromDefaults()
  .withPlayer(new Player({}))
  .withLevels([])
  .withSprites([
    Player.getSprite(),
    new Sprite(
      "assets/16x16-game-assets/tiles/1_terrain.png",
      "src/sprites/terrain.json"
    ),
  ])
  .build();

game.initialize();
game.start();

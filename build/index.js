"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GameBuilder_1 = require("./Game/GameBuilder");
const Player_1 = require("./Player/Player");
const Sprite_1 = require("./Sprite/Sprite");
const player = new Player_1.Player({});
const game = GameBuilder_1.GameBuilder.fromDefaults()
    .withPlayer(player)
    .withLevels([])
    .withSprites([
    player.getSprite(),
    new Sprite_1.Sprite("assets/16x16-game-assets/tiles/1_terrain.png", "src/sprites/terrain.json"),
])
    .build();
game.initialize();
game.start();
//# sourceMappingURL=index.js.map
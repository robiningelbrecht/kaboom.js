"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GameBuilder_1 = require("./GameBuilder");
const Player_1 = require("./Player");
const game = GameBuilder_1.GameBuilder.fromDefaults()
    .withPlayer(new Player_1.Player({}))
    .withLevels([])
    .withSprites([])
    .build();
game.initialize();
game.start();
//# sourceMappingURL=index.js.map
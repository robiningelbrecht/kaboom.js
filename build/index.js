"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GameBuilder_1 = require("./Game/GameBuilder");
const Outdoor_1 = require("./Level/Outdoor");
const Indoor_1 = require("./Level/Indoor");
const SpriteCollection_1 = require("./Sprite/SpriteCollection");
const startLevel = new Outdoor_1.Outdoor();
const levels = [startLevel, new Indoor_1.Indoor()];
const game = GameBuilder_1.GameBuilder.fromDefaults()
    .withKaboom({
    scale: 2,
    background: [0, 0, 0],
})
    .withLevels(levels)
    .withStartLevel(startLevel)
    .withSprites(SpriteCollection_1.SpriteCollection.get())
    .build();
game.initialize();
game.render();
//# sourceMappingURL=index.js.map
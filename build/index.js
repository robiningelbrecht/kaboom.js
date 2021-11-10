"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AudioCollection_1 = require("./Audio/AudioCollection");
const GameBuilder_1 = require("./Game/GameBuilder");
const Indoor_1 = require("./Level/Indoor");
const Outdoor_1 = require("./Level/Outdoor");
const SpriteCollection_1 = require("./Sprite/SpriteCollection");
const kaboom_1 = require("kaboom");
(0, kaboom_1.default)({
    scale: 1.5,
    background: [0, 0, 0],
    debug: true
});
debug.inspect = false;
SpriteCollection_1.SpriteCollection.load();
const startLevel = new Outdoor_1.Outdoor();
const levels = [startLevel, new Indoor_1.Indoor()];
const game = GameBuilder_1.GameBuilder.fromDefaults()
    .withLevels(levels)
    .withStartLevel(startLevel)
    .withAudioCollection(new AudioCollection_1.AudioCollection())
    .build();
game.render();
//# sourceMappingURL=index.js.map
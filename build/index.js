"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AudioCollection_1 = require("./Audio/AudioCollection");
const GameBuilder_1 = require("./Game/GameBuilder");
const Indoor_1 = require("./Level/Indoor");
const Outdoor_1 = require("./Level/Outdoor");
const SpriteCollection_1 = require("./Sprite/SpriteCollection");
const startLevel = new Outdoor_1.Outdoor();
const levels = [startLevel, new Indoor_1.Indoor()];
const game = GameBuilder_1.GameBuilder.fromDefaults()
    .withKaboom({
    scale: 1.5,
    background: [0, 0, 0],
})
    .withLevels(levels)
    .withStartLevel(startLevel)
    .withSprites(SpriteCollection_1.SpriteCollection.get())
    .withAudioCollection(new AudioCollection_1.AudioCollection())
    .build();
game.initialize();
game.render();
//# sourceMappingURL=index.js.map
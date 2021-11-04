import GameBuilder from "./src/GameBuilder.js";

const game = GameBuilder.fromDefaults()
        .withPlayer('test')
        .withLevels()
        .withSprites()
        .build();

game.initialize();
game.start();

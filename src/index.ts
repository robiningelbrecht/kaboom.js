import { GameBuilder } from "./GameBuilder";
import { Player } from "./Player";

const game = GameBuilder.fromDefaults()
        .withPlayer(new Player({}))
        .withLevels([])
        .withSprites([])
        .build();

game.initialize();
game.start();

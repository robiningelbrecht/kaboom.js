import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";
import Game from "./game/Game.js";

const game = new Game();

game.initialize();
game.loadSprites();
game.importScenes();
game.start();

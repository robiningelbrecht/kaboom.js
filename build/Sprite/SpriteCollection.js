"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpriteCollection = void 0;
const Sprite_1 = require("./Sprite");
class SpriteCollection {
    static get() {
        return [
            new Sprite_1.Sprite("assets/game-assets/14_human_sprite_base.png", "assets/sprites/player.json"),
            new Sprite_1.Sprite("assets/game-assets/1_terrain.png", "assets/sprites/terrain.json"),
        ];
    }
}
exports.SpriteCollection = SpriteCollection;
//# sourceMappingURL=SpriteCollection.js.map
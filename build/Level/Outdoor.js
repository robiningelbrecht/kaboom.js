"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Outdoor = void 0;
const Player_1 = require("../Player/Player");
const Layer_1 = require("./Layer");
const Level_1 = require("./Level");
class Outdoor extends Level_1.Level {
    getInitialPlayerPosition() {
        return vec2(10, 2);
    }
    getInitialPlayerAnimation() {
        return Player_1.IDLE_ANIMATON.down;
    }
    getBaseLayer() {
        return new Layer_1.Layer([
            'atttttttttttttttttttb',
            'l                   r',
            'l                   r',
            'l                   r',
            'l                   r',
            'l                   r',
            'l                   r',
            'ceeeeeeeeeeeeeeeeeeed',
        ], {
            width: 16,
            height: 16,
            ' ': () => [sprite('grass')],
            'a': () => [sprite('grass_border_top_left'), solid(), area({ width: 1, height: 1 })],
            'b': () => [sprite('grass_border_top_right'), solid(), area({ width: 1, height: 1, offset: vec2(15, 0) })],
            'c': () => [sprite('grass_border_bottom_left'), solid(), area({ width: 1, height: 1, offset: vec2(0, 15) })],
            'd': () => [sprite('grass_border_bottom_right'), solid(), area({ width: 1, height: 1, offset: vec2(15, 15) })],
            'l': () => [sprite('grass_border_left'), solid(), area({ width: 1 })],
            'r': () => [sprite('grass_border_right'), solid(), area({ width: 1, offset: vec2(15, 0) })],
            't': () => [sprite('grass_border_top'), solid(), area({ height: 1 })],
            'e': () => [sprite('grass_border_bottom'), solid(), area({ height: 1, offset: vec2(0, 15) })],
        });
    }
    getLayers() {
        return [];
    }
}
exports.Outdoor = Outdoor;
//# sourceMappingURL=Outdoor.js.map
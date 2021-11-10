"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Indoor = void 0;
const Player_1 = require("../Player/Player");
const Layer_1 = require("./Layer");
const Level_1 = require("./Level");
class Indoor extends Level_1.Level {
    getInitialPlayerPosition() {
        return vec2(0, 0);
    }
    getInitialPlayerAnimation() {
        return Player_1.IDLE_ANIMATON.up;
    }
    getBaseLayer() {
        return new Layer_1.Layer([
            '                                 ',
            '                                 ',
            '                                 ',
            '                                 ',
            '                                 ',
            '                                 ',
            '                                 ',
            '                                 ',
            '                                 ',
            '                                 ',
            '                                 ',
            '                                 ',
            '                                 ',
            '                                 ',
            '                                 ',
            '                                 ',
            '                                 ',
            '                                 ',
            '                                 ',
            '                                 ',
            '                                 ',
            '                                 ',
            '                                 ',
            '                                 ',
            '                                 ',
            '                                 ',
            '                                 ',
            '                                 ',
            '                                 ',
        ], {
            width: 64,
            height: 32,
            ' ': () => [sprite('grass_light')],
        });
    }
    getLayers() {
        return [];
    }
}
exports.Indoor = Indoor;
//# sourceMappingURL=Indoor.js.map
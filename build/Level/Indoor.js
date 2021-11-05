"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Indoor = void 0;
const Player_1 = require("../Player/Player");
const Layer_1 = require("./Layer");
class Indoor {
    constructor() { }
    getLayers() {
        return [
            new Layer_1.Layer([
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
            ], {
                width: 64,
                height: 32,
                " ": () => [sprite("grass_light")],
            }),
        ];
    }
    getInitialPlayerPosition() {
        return vec2(100, 100);
    }
    getInitialPlayerAnimation() {
        return Player_1.IDLE_ANIMATON.up;
    }
}
exports.Indoor = Indoor;
//# sourceMappingURL=Indoor.js.map
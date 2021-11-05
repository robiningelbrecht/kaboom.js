"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Outdoor = void 0;
const Player_1 = require("../Player/Player");
const Layer_1 = require("./Layer");
class Outdoor {
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
                "                xx               ",
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
                " ": () => [sprite("grass_dark")],
                x: () => [sprite("grass_light")],
            }),
        ];
    }
    getInitialPlayerPosition() {
        return vec2(100, 100);
    }
    getInitialPlayerAnimation() {
        return Player_1.IDLE_ANIMATON.down;
    }
}
exports.Outdoor = Outdoor;
//# sourceMappingURL=Outdoor.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Outdoor = void 0;
class Outdoor {
    constructor() { }
    getLayers() {
        return [];
    }
    getMap() {
        return [
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
        ];
    }
    getOptions() {
        return {
            width: 64,
            height: 32,
            " ": () => [sprite("grass_dark")],
            "x": () => [sprite("grass_light")],
        };
    }
}
exports.Outdoor = Outdoor;
//# sourceMappingURL=Outdoor.js.map
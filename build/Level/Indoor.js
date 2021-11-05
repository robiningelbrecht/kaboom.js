"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Indoor = void 0;
class Indoor {
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
        ];
    }
    getOptions() {
        return {
            width: 64,
            height: 32,
            " ": () => [sprite("grass_light")],
        };
    }
}
exports.Indoor = Indoor;
//# sourceMappingURL=Indoor.js.map
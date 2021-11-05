"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layer = void 0;
class Layer {
    constructor(map, layerOpt) {
        this.map = map;
        this.layerOpt = layerOpt;
    }
    getMap() {
        return this.map;
    }
    getOptions() {
        return this.layerOpt;
    }
}
exports.Layer = Layer;
//# sourceMappingURL=Layer.js.map
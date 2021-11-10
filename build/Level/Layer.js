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
    hasEqualSize(layer) {
        return this.getMap().length === layer.getMap().length
            && this.getMap()[0].length === layer.getMap()[0].length;
    }
}
exports.Layer = Layer;
//# sourceMappingURL=Layer.js.map
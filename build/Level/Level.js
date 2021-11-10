"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Level = void 0;
class Level {
    render() {
        for (const layer of this.getLayers()) {
            if (!layer.hasEqualSize(this.getBaseLayer())) {
                debug.error('All layers must have the same map size as the base layer');
            }
        }
        this.baseLayer = addLevel(this.getBaseLayer().getMap(), Object.assign(Object.assign({}, this.getBaseLayer().getOptions()), { pos: this.calculateLayerPosition() }));
        this.getLayers().forEach((layer) => addLevel(layer.getMap(), Object.assign(Object.assign({}, layer.getOptions()), { pos: this.calculateLayerPosition() })));
    }
    getMap() {
        return this.baseLayer;
    }
    calculateLayerPosition() {
        const numberOfTilesX = this.getBaseLayer().getMap()[0].length;
        const widthOfTile = this.getBaseLayer().getOptions().width;
        const numberOfTilesY = this.getBaseLayer().getMap().length;
        const heightOfTile = this.getBaseLayer().getOptions().width;
        return vec2((width() - (numberOfTilesX * widthOfTile)) / 2, (height() - (numberOfTilesY * heightOfTile)) / 2);
    }
}
exports.Level = Level;
//# sourceMappingURL=Level.js.map
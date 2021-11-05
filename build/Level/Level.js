"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Level = void 0;
class Level {
    render() {
        this.getLayers().forEach((layer) => addLevel(layer.getMap(), layer.getOptions()));
    }
}
exports.Level = Level;
//# sourceMappingURL=Level.js.map
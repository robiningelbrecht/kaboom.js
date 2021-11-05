"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundCollection = void 0;
const Sound_1 = require("./Sound");
class SoundCollection {
    static get() {
        return [
            new Sound_1.Sound("background", "assets/audio/background.mp3"),
        ];
    }
}
exports.SoundCollection = SoundCollection;
//# sourceMappingURL=SoundCollection.js.map
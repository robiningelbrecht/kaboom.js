"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundCollection = void 0;
const Sound_1 = require("./Sound");
class SoundCollection {
    static get() {
        return [
            new Sound_1.Sound('background', 'assets/audio/background.mp3'),
            new Sound_1.Sound('footsteps', 'assets/audio/footsteps.ogg'),
        ];
    }
}
exports.SoundCollection = SoundCollection;
//# sourceMappingURL=SoundCollection.js.map
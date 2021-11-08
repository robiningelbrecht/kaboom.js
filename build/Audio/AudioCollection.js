"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioCollection = void 0;
const AudioFile_1 = require("./AudioFile");
class AudioCollection {
    constructor() {
        this.audioFiles = [
            new AudioFile_1.AudioFile('background', 'assets/audio/background.mp3', {
                volume: 0.1,
                loop: true,
            }),
            new AudioFile_1.AudioFile('footsteps', 'assets/audio/footsteps.ogg', {
                volume: 0.4,
                loop: true,
                speed: 0.8
            }),
        ];
    }
    all() {
        return this.audioFiles;
    }
    get(name) {
        for (const audioFile of this.all()) {
            if (name === audioFile.getName()) {
                return audioFile;
            }
        }
        throw Error('Invalid audio file name ' + name);
    }
}
exports.AudioCollection = AudioCollection;
//# sourceMappingURL=AudioCollection.js.map
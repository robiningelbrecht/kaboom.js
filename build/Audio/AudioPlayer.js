"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioPlayer = exports.AUDIO_ENABLED = void 0;
const AudioCollection_1 = require("./AudioCollection");
exports.AUDIO_ENABLED = false;
class AudioPlayer {
    load() {
        AudioCollection_1.AudioCollection.all().forEach((audioFile) => loadSound(audioFile.getName(), audioFile.getLocation()));
    }
    play(audioFile) {
        if (!exports.AUDIO_ENABLED) {
            return;
        }
        audioFile.play();
    }
    pause(audioFile) {
        if (!exports.AUDIO_ENABLED) {
            return;
        }
        audioFile.play();
    }
    isPaused(audioFile) {
        return audioFile.isPaused();
    }
}
exports.AudioPlayer = AudioPlayer;
//# sourceMappingURL=AudioPlayer.js.map
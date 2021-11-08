"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioPlayer = exports.AUDIO_ENABLED = void 0;
exports.AUDIO_ENABLED = false;
class AudioPlayer {
    constructor(audioPlay) {
        this.audioPlay = audioPlay;
        this.audioPlay.pause();
    }
    play() {
        if (!exports.AUDIO_ENABLED) {
            return;
        }
        this.audioPlay.play();
    }
    pause() {
        if (!exports.AUDIO_ENABLED) {
            return;
        }
        this.audioPlay.pause();
    }
    isPaused() {
        return this.audioPlay.isPaused();
    }
}
exports.AudioPlayer = AudioPlayer;
//# sourceMappingURL=AudioPlayer.js.map
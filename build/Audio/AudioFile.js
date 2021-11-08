"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioFile = exports.AUDIO_ENABLED = void 0;
exports.AUDIO_ENABLED = true;
class AudioFile {
    constructor(name, location, options) {
        this.name = name;
        this.location = location;
        this.options = options;
    }
    getName() {
        return this.name;
    }
    getLocation() {
        return this.location;
    }
    getOptions() {
        return this.options;
    }
    load() {
        loadSound(this.getName(), this.getLocation());
        this.audioPlay = play(this.getName(), this.getOptions());
        this.stop();
    }
    play() {
        if (!exports.AUDIO_ENABLED) {
            return;
        }
        if (!this.audioPlay.isPaused()) {
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
    stop() {
        if (!exports.AUDIO_ENABLED) {
            return;
        }
        this.audioPlay.stop();
    }
    isPaused() {
        return this.audioPlay.isPaused();
    }
}
exports.AudioFile = AudioFile;
//# sourceMappingURL=AudioFile.js.map
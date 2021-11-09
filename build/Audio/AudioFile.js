"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioFile = exports.AUDIO_ENABLED = void 0;
exports.AUDIO_ENABLED = false;
class AudioFile {
    constructor(name, location, options) {
        this.name = name;
        this.location = location;
        this.options = options;
        this.load();
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            yield loadSound(this.getName(), this.getLocation());
        });
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
    play() {
        if (!exports.AUDIO_ENABLED) {
            return;
        }
        if (!this.isPaused()) {
            return;
        }
        if (!this.audioPlay) {
            this.audioPlay = play(this.getName(), this.getOptions());
            return;
        }
        this.audioPlay.play();
    }
    pause() {
        if (!exports.AUDIO_ENABLED) {
            return;
        }
        if (!this.audioPlay) {
            return;
        }
        this.audioPlay.pause();
    }
    stop() {
        if (!exports.AUDIO_ENABLED) {
            return;
        }
        if (!this.audioPlay) {
            return;
        }
        this.audioPlay.stop();
    }
    isPaused() {
        if (!this.audioPlay) {
            return true;
        }
        return this.audioPlay.isPaused();
    }
}
exports.AudioFile = AudioFile;
//# sourceMappingURL=AudioFile.js.map
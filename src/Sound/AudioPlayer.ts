import { AudioPlay } from "kaboom";

export const AUDIO_ENABLED = false;

export class AudioPlayer {
  private audioPlay: AudioPlay;

  constructor(audioPlay: AudioPlay) {
    this.audioPlay = audioPlay;
    this.audioPlay.pause();
  }

  public play(): void {
    if (!AUDIO_ENABLED) {
      return;
    }
    this.audioPlay.play();
  }

  public pause(): void {
    if (!AUDIO_ENABLED) {
      return;
    }
    this.audioPlay.pause();
  }

  public isPaused(): boolean{
      return this.audioPlay.isPaused();
  }
}

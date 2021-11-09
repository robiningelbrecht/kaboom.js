import { AudioPlay, AudioPlayOpt } from 'kaboom';

export const AUDIO_ENABLED = false;

export class AudioFile {
  private name: string;
  private location: string;
  private options: AudioPlayOpt;
  private audioPlay!: AudioPlay;

  constructor(name: string, location: string, options: AudioPlayOpt) {
    this.name = name;
    this.location = location;
    this.options = options;

    this.load();
  }

  private async load(): Promise<void> {
    await loadSound(this.getName(), this.getLocation());
  }

  public getName(): string {
    return this.name;
  }

  public getLocation(): string {
    return this.location;
  }

  public getOptions(): AudioPlayOpt {
    return this.options;
  }

  public play(): void {
    if (!AUDIO_ENABLED) {
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

  public pause(): void {
    if (!AUDIO_ENABLED) {
      return;
    }

    if (!this.audioPlay) {
      return;
    }

    this.audioPlay.pause();
  }

  public stop(): void {
    if (!AUDIO_ENABLED) {
      return;
    }

    if (!this.audioPlay) {
      return;
    }

    this.audioPlay.stop();
  }

  public isPaused(): boolean {
    if (!this.audioPlay) {
      return true;
    }

    return this.audioPlay.isPaused();
  }
}

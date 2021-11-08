import { AudioPlay, AudioPlayOpt } from 'kaboom';

export const AUDIO_ENABLED = true;

export class AudioFile{
  private name: string;
  private location: string;
  private options: AudioPlayOpt;
  private audioPlay!: AudioPlay;

  constructor(name: string, location: string, options: AudioPlayOpt){
    this.name = name;
    this.location = location;
    this.options = options;
  }

  public getName(): string{
    return this.name;
  }

  public getLocation(): string{
    return this.location;
  }

  public getOptions(): AudioPlayOpt{
    return this.options;
  }

  public load(): void{
    loadSound(this.getName(),this.getLocation());
    this.audioPlay = play(this.getName(), this.getOptions());
    this.stop();
  }

  public play(): void{
    if(!AUDIO_ENABLED){
      return;
    }

    if(!this.audioPlay.isPaused()){
      return;
    }

    this.audioPlay.play();
  }

  public pause(): void{
    if(!AUDIO_ENABLED){
      return;
    }
    this.audioPlay.pause();
  }

  public stop(): void{
    if(!AUDIO_ENABLED){
      return;
    }
    this.audioPlay.stop();
  }

  public isPaused(): boolean{
    return this.audioPlay.isPaused();
  }
}
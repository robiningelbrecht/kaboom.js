import { AudioFile } from './AudioFile';

export class AudioCollection{
  private audioFiles: Array<AudioFile>;

  constructor(){
    this.audioFiles = [
      new AudioFile(
        'background',
        'assets/audio/background.mp3',
        {
          volume: 0.1,
          loop: true,
        }
      ),
      new AudioFile(
        'footsteps',
        'assets/audio/footsteps.ogg',
        {
          volume: 0.4,
          loop: true,
          speed: 0.8
        }
      ),
    ];
  }

  public all(): Array<AudioFile>{
    return this.audioFiles;
  }

  public get(name: string): AudioFile{
    for (const audioFile of this.all()) {
      if(name === audioFile.getName()){
        return audioFile;
      }
    }

    throw Error('Invalid audio file name ' + name);
  }
}
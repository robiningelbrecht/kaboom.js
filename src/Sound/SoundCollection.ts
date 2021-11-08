import { Sound } from './Sound';

export class SoundCollection {
  public static get(): Array<Sound> {
    return [
      // Background sound.
      new Sound(
        'background',
        'assets/audio/background.mp3'
      ),
      // Footsteps.
      new Sound(
        'footsteps',
        'assets/audio/footsteps.ogg'
      ),
    ];
  }
}

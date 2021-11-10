import { AudioCollection } from '../Audio/AudioCollection';
import { Level } from '../Level/Level';
import { Player } from '../Player/Player';

export const SCENE = 'main';

export class Game {
  private startLevel: Level;
  private levels: Array<Level>;
  private player!: Player;
  private audioColletion: AudioCollection;

  constructor(
    startLevel: Level,
    levels: Array<Level>,
    audioColletion: AudioCollection
  ) {
    this.startLevel = startLevel;
    this.levels = levels;
    this.audioColletion = audioColletion;
  }

  public render(): void {
    this.audioColletion.get('background').play();

    layers([
      'game',
      'ui',
      'player'
    ], 'game');

    this.renderLevel(this.startLevel);
  }

  private renderLevel(level: Level): void {
    scene(SCENE, () => {
      level.render();

      const footstepsAudio = this.audioColletion.get('footsteps');
      this.player = new Player(
        add([
          pos(level.getMap().getPos(level.getInitialPlayerPosition())),
          sprite('player', { anim: level.getInitialPlayerAnimation() }),
          area({ height: 24, offset: vec2(0, 34) }),
          solid(),
          layer('player')
        ])
      );

      keyDown('right', () => {
        footstepsAudio.play();
        this.player.moveRight();
      });

      keyDown('left', () => {
        footstepsAudio.play();
        this.player.moveLeft();
      });

      keyDown('up', () => {
        footstepsAudio.play();
        this.player.moveUp();
      });

      keyDown('down', () => {
        footstepsAudio.play();
        this.player.moveDown();
      });

      keyPress('right', () => {
        this.player.animateRunRight();
      });

      keyPress('left', () => {
        this.player.animateRunLeft();
      });

      keyPress('up', () => {
        this.player.animateRunUp();
      });

      keyPress('down', () => {
        this.player.animateRunDown();
      });

      keyRelease(['left', 'right', 'up', 'down'], () => {
        if (
          !keyIsDown('left') &&
          !keyIsDown('right') &&
          !keyIsDown('up') &&
          !keyIsDown('down')
        ) {
          footstepsAudio.stop();
          this.player.stayIdle();
        } else {
          if (keyIsDown('left')) {
            this.player.animateRunLeft();
          }
          if (keyIsDown('right')) {
            this.player.animateRunRight();
          }
          if (keyIsDown('up')) {
            this.player.animateRunUp();
          }
          if (keyIsDown('down')) {
            this.player.animateRunDown();
          }
        }
      });

      keyPress('f', () => {
        fullscreen(!isFullscreen());
      });

      keyPress('space', () => {
        footstepsAudio.stop();
        this.renderLevel(this.levels[1]);
      });
    });

    go(SCENE);
  }
}

import kaboom, { KaboomOpt } from 'kaboom';
import { AudioCollection } from '../Audio/AudioCollection';
import { Level } from '../Level/Level';
import { Player } from '../Player/Player';
import { Sprite } from '../Sprite/Sprite';

export const SCENE = 'main';

export class Game {
  private kaboom: KaboomOpt;
  private startLevel: Level;
  private levels: Array<Level>;
  private sprites: Array<Sprite>;
  private player!: Player;
  private audioColletion: AudioCollection;

  constructor(
    kaboom: KaboomOpt,
    startLevel: Level,
    levels: Array<Level>,
    sprites: Array<Sprite>,
    audioColletion: AudioCollection
  ) {
    this.kaboom = kaboom;
    this.startLevel = startLevel;
    this.levels = levels;
    this.sprites = sprites;
    this.audioColletion = audioColletion;
  }

  public initialize(): void {
    kaboom(this.kaboom);

    this.loadSprites();
    this.loadAudio();
  }

  private loadSprites(): void {
    this.sprites.forEach((sprite: Sprite) =>
      loadSpriteAtlas(sprite.getImgSource(), sprite.getJsonDefinition())
    );
  }

  private loadAudio(): void {
    for (const audioFile of this.audioColletion.all()) {
      audioFile.load();
    }
  }

  public render(): void {
    //this.audioColletion.get('background').play();
  
    this.renderLevel(this.startLevel);
  }

  private renderLevel(level: Level): void {
    scene(SCENE, () => {
      level.render();

      const footstepsAudio = this.audioColletion.get('footsteps');
      this.player = new Player(
        add([
          pos(level.getInitialPlayerPosition()),
          sprite('player', { anim: level.getInitialPlayerAnimation() }),
          area(),
          solid(),
        ])
      );
      this.player.action();

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

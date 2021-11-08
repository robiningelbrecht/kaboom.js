import kaboom, { KaboomOpt } from 'kaboom';
import { AudioPlayer } from '../Sound/AudioPlayer';
import { Level } from '../Level/Level';
import { Player } from '../Player/Player';
import { Sound } from '../Sound/Sound';
import { Sprite } from '../Sprite/Sprite';

export const SCENE = 'main';

export class Game {
  private kaboom: KaboomOpt;
  private startLevel: Level;
  private levels: Array<Level>;
  private sprites: Array<Sprite>;
  private player!: Player;
  private sound: Array<Sound>;

  constructor(
    kaboom: KaboomOpt,
    startLevel: Level,
    levels: Array<Level>,
    sprites: Array<Sprite>,
    sound: Array<Sound>
  ) {
    this.kaboom = kaboom;
    this.startLevel = startLevel;
    this.levels = levels;
    this.sprites = sprites;
    this.sound = sound;
  }

  public initialize(): void {
    kaboom(this.kaboom);

    this.loadSprites();
    this.loadSound();
  }

  private loadSprites(): void {
    this.sprites.forEach((sprite: Sprite) =>
      loadSpriteAtlas(sprite.getImgSource(), sprite.getJsonDefinition())
    );
  }

  private loadSound(): void {
    this.sound.forEach((sound: Sound) =>
      loadSound(sound.getName(), sound.getLocation())
    );
  }

  public render(): void {
    const backgroundMusic = new AudioPlayer(play('background', {
      volume: 0.1,
      loop: true,
    }));
    backgroundMusic.play();
  
    this.renderLevel(this.startLevel);
  }

  private renderLevel(level: Level): void {
    scene(SCENE, () => {
      level.render();

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
        this.player.moveRight();
      });

      keyDown('left', () => {
        this.player.moveLeft();
      });

      keyDown('up', () => {
        this.player.moveUp();
      });

      keyDown('down', () => {
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
        this.player.pauseFootstepSound();
        this.renderLevel(this.levels[1]);
      });
    });

    go(SCENE);
  }
}

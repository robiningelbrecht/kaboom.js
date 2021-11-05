import { Vec2 } from "kaboom";
import { IDLE_ANIMATON } from "../Player/Player";
import { Layer } from "./Layer";

export abstract class Level {
  public render(): void {
    this.getLayers().forEach((layer: Layer) =>
      addLevel(layer.getMap(), layer.getOptions())
    );
  }

  protected abstract getLayers(): Array<Layer>;
  public abstract getInitialPlayerPosition(): Vec2;
  public abstract getInitialPlayerAnimation(): IDLE_ANIMATON;
}

import { Vec2 } from "kaboom";
import { IDLE_ANIMATON } from "../Player/Player";
import { Layer } from "./Layer";
import { Level } from "./Level";

export class Outdoor implements Level {
  constructor() {}

  getLayers(): Layer[] {
    return [
        new Layer(
            [
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                xx               ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
                "                                 ",
              ],
              {
                width: 64,
                height: 32,
                " ": () => [sprite("grass_dark")],
                x: () => [sprite("grass_light")],
              }
        ),
    ];
  }

  getInitialPlayerPosition(): Vec2 {
    return vec2(100, 100);
  }

  getInitialPlayerAnimation(): IDLE_ANIMATON {
    return IDLE_ANIMATON.down;
  }
}

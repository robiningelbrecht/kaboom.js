import { LevelOpt, Vec2 } from "kaboom";
import { Sprite } from "../Sprite/Sprite";
import { Layer } from "./Layer";
import { Level } from "./Level";

export class Indoor implements Level {
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
          "                                 ",
        ],
        {
          width: 64,
          height: 32,
          " ": () => [sprite("grass_light")],
        }
      ),
    ];
  }

  getPlayerInitialPosition(): Vec2 {
    return vec2(100, 100);
  }
}

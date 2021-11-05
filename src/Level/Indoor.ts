import { LevelOpt } from "kaboom";
import { Sprite } from "../Sprite/Sprite";
import { Layer } from "./Layer";
import { Level } from "./Level";

export class Indoor implements Level {
  constructor() {}

  getLayers(): Layer[] {
    return [];
  }

  getMap(): string[] {
    return [
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
    ];
  }

  getOptions(): LevelOpt {
    return {
      width: 64,
      height: 32,
      " ": () => [sprite("grass_light")],
    };
  }
}

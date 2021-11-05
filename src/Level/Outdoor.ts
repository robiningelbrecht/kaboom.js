import { LevelOpt } from "kaboom";
import { Sprite } from "../Sprite/Sprite";
import { Layer } from "./Layer";
import { Level } from "./Level";

export class Outdoor implements Level {
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
    ];
  }

  getOptions(): LevelOpt {
    return {
      width: 64,
      height: 32,
      " ": () => [sprite("grass_dark")],
      "x": () => [sprite("grass_light")],
    };
  }
}

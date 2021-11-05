import { LevelOpt } from "kaboom";
import { Layer } from "./Layer";

export interface Level{
    getMap(): Array<string>;
    getOptions(): LevelOpt;
    getLayers(): Array<Layer>
}
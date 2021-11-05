import { LevelOpt, Vec2 } from "kaboom";
import { Layer } from "./Layer";

export interface Level{
    getLayers(): Array<Layer>;
    getPlayerInitialPosition(): Vec2;
}
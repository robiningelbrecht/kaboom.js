import { Vec2 } from "kaboom";
import { IDLE_ANIMATON } from "../Player/Player";
import { Layer } from "./Layer";

export interface Level{
    getLayers(): Array<Layer>;
    getInitialPlayerPosition(): Vec2;
    getInitialPlayerAnimation(): IDLE_ANIMATON;
}
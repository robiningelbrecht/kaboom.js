"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sprite = void 0;
class Sprite {
    constructor(imgSource, jsonDefinition) {
        this.imgSource = imgSource;
        this.jsonDefintion = jsonDefinition;
        this.load();
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            yield loadSpriteAtlas(this.getImgSource(), this.getJsonDefinition());
        });
    }
    getImgSource() {
        return this.imgSource;
    }
    getJsonDefinition() {
        return this.jsonDefintion;
    }
}
exports.Sprite = Sprite;
//# sourceMappingURL=Sprite.js.map
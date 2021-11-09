export class Sprite {
  private imgSource: string;
  private jsonDefintion: string;

  constructor(imgSource: string, jsonDefinition: string) {
    this.imgSource = imgSource;
    this.jsonDefintion = jsonDefinition;
    this.load();
  }

  private async load(): Promise<void>{
    await loadSpriteAtlas(this.getImgSource(), this.getJsonDefinition());
  }

  public getImgSource(): string {
    return this.imgSource;
  }

  public getJsonDefinition(): string {
    return this.jsonDefintion;
  }
}

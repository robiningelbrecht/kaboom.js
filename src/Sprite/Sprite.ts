export class Sprite {
  private imgSource: string;
  private jsonDefintion: string;

  constructor(imgSource: string, jsonDefinition: string) {
    this.imgSource = imgSource;
    this.jsonDefintion = jsonDefinition;
  }

  public getImgSource(): string {
    return this.imgSource;
  }

  public getJsonDefinition(): string {
    return this.jsonDefintion;
  }
}

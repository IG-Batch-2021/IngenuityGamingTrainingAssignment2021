import { Sprite, Texture } from 'pixi.js';
import { BlurFilter } from '@pixi/filter-blur';
import { getTextureFrame } from './Textures';

export class Symbol extends Sprite {
  private readonly normalTexture: Texture;

  private readonly blurTexture: Texture;

  constructor(symId: string) {
    super(getTextureFrame('symbols', symId) as Texture);
    this.anchor.set(0.5);
    this.normalTexture = this.texture;
    this.blurTexture = getTextureFrame('symbolsBlur', `${symId}_blur`) as Texture;
  }

  public blur(): void {
    if (this.blurTexture) {
      this.texture = this.blurTexture;
    } else {
      const blur = new BlurFilter(20, 10);
      this.filters = [blur];
    }
  }

  public unBlur(): void {
    this.texture = this.normalTexture;
  }
}
import { Sprite, Texture } from 'pixi.js';
import { BlurFilter } from '@pixi/filter-blur';
import { getTexture } from './Textures';

export class ReelSymbol extends Sprite {
  private normalTexture: Texture|undefined;

  private blurTexture: Texture|undefined;

  private isBlurred: boolean;

  public setIconTexture(id: string) {
    this.normalTexture = getTexture(`${id}.png`) as Texture;
    this.blurTexture = getTexture(`${id}_blur.png`) as Texture;
    this.texture = this.isBlurred ? this.blurTexture : this.normalTexture;
  }

  constructor(symId: string) {
    super();
    this.setIconTexture(symId);
    this.anchor.set(0.5);
    this.isBlurred = false;
  }

  public blur(): void {
    this.isBlurred = true;
    if (this.blurTexture) {
      this.texture = this.blurTexture;
    } else {
      const blur = new BlurFilter(20, 10);
      this.filters = [blur];
    }
  }

  public unBlur(): void {
    this.isBlurred = false;
    this.texture = this.normalTexture as Texture;
    this.filters = null;
    console.log('unblur ', this);
  }
}

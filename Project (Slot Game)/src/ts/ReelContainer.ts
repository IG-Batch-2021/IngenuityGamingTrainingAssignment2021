import { Container, Graphics } from 'pixi.js';
import { Reel } from './Reel';

export class ReelContainer extends Container {
  private reels:Reel[] = [];

  public init(): void {
    const startX = 135;
    const startY = 75;
    const rWidth = 217;
    const symHeight = 178;
    const reelRows = 3;
    const numReels = 5;

    for (let i = 0; i < numReels; i++) {
      const reel = new Reel(i, startX + (i * rWidth), startY);
      reel.init(reelRows, 212, symHeight);
      this.addChild(reel);
      this.reels.push(reel);
    }
    const rMask = new Graphics();
    rMask.drawRect(startX, startY, rWidth * numReels, symHeight * reelRows);
    this.addChild(rMask);
    this.mask = rMask;
  }

  public spin(): void {
    this.reels.forEach((reel, i) => {
      setTimeout(reel.spin.bind(reel), 100 * (i + 1));
    });
  }
}

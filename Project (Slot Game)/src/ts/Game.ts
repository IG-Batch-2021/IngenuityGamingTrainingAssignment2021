import {
  Application, Container,
} from 'pixi.js';

import { preLoader } from './PreLoader';
import assets from './assets';
import { Scene } from './Scene';
import { getAllTexture } from './Textures';

export class Game {
  private readonly stage: Container;

  private readonly app: Application;

  private baseScene: Scene;

  private isInitialized = false;

  constructor(app: Application) {
    this.app = app;
    this.stage = app.stage;

    this.baseScene = new Scene(this.app, this.stage);

    preLoader(assets, () => {
      this.baseScene.init();
      this.isInitialized = true;
      console.log('All Textures ', getAllTexture());
    });
  }

  public update(delta: number): void {
    if (this.isInitialized && this.baseScene.initialized) {
      this.baseScene.update(delta);
    }
  }
}

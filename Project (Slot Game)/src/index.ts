import './css/main.scss';
import { Application, Ticker } from 'pixi.js';
import { Game } from './ts/Game';
import {color as color} from "./enums/color";

const width: number = window.innerWidth - 10;
const height: number = window.innerHeight - 2;

window.onload = () => {
  const app = new Application({
    width: width,
    height: height,
    backgroundColor: color.black,
    sharedTicker: true,
    sharedLoader: true,
  });

  document.body.appendChild(app.view);
  (<any>window).app = app;
  const game = new Game(app);
  const ticker = Ticker.shared;
  ticker.add(game.update.bind(game));
};
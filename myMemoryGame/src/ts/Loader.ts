import {Loader as PixiLoader} from "pixi.js";
// import assets from "./assets";

export const bunnyPath: string = "https://pixijs.io/examples/examples/assets/bunny.png";

export class Loader {
    private readonly _loader: PixiLoader;
    constructor() {
        this._loader = new PixiLoader();
    }

    start(cb: (l: PixiLoader, r:any) => void): void {
        this._loader.add("car", bunnyPath);
        this._loader.load(cb);
    }
}
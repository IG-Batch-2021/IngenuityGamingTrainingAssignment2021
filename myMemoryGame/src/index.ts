import { Application, Graphics, Sprite } from "pixi.js";
import {Loader, bunnyPath as path} from "./ts/Loader";
import {createCard as cC, clearGraphics as cG} from "./ts/card";

window.addEventListener("load", () => {
    const app = new Application({
        width: 900,
        height: 600,
        antialias: true,
        resolution: 1,
        view: document.getElementById("my-canvas") as HTMLCanvasElement,
        backgroundColor: 0x08080808,
        sharedLoader: true,
    });

    const radius: number = 12;
    let numberOfCards: number = 8;
    let cards: Graphics[] = [];
    let cardCoordinates: number[] = [0, 50, 0, 200];
    let cardsColor: any[] = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xff00ff, 0x00ffff, 0xf0f0f0, 0xff8b00];
    let x1 = cardCoordinates[0];
    let y1 = cardCoordinates[1];
    let x2 = x1+150;
    let y2 = y1+150;

    for(let i=0; i<numberOfCards; i++) {
        cards[i] = cC(x1+50, y1, x2, y2, radius, cardsColor[i]);
        app.stage.addChild(cards[i]);

        if(i == 3 || i == 7) {
            x1 = 0;
            y1 += 250;
        } else
            x1 += 200;

    }
    if(cards[0] == cards[1]) console.log("0 and 1 is same"); else console.log("1 and 0 are not same");
    const loader = new Loader();
    let carA: Sprite;
    loader.start((loader, resource) => {

    })

    app.ticker.add((delta) => {
        //Do something here
    })

    cards[7].on("mousedown", (e) =>{
        console.log('Mouse clicked');
        console.log('X', e.data.global.x, 'Y', e.data.global.y);
        cards[7].alpha = 0.5;
    })
    cards[1].on("mouseup", (e) =>{
        console.log('Mouse released');
        console.log('X', e.data.global.x, 'Y', e.data.global.y);
        cards[1].alpha = 0.8;
    })
    cards[3].alpha = 0.2;
    console.log(cards);

});
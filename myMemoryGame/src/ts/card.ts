import { Application, Graphics, Text } from "pixi.js";


export function createCard(x1: number, y1: number, x2: number, y2: number, radius: number, color: any): Graphics {
    const g:Graphics = new Graphics;
    g.beginFill(color);
    g.drawRoundedRect(x1, y1, x2, y2, radius);
    g.endFill();
    console.log(x1+" "+y1+" "+x2+" "+y2);

    return g;
}
export function clearGraphics(gr:Graphics): void {
    gr.clear();
}
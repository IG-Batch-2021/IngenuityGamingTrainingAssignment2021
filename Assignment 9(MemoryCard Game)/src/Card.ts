import {Rectangle, Texture, Sprite, Container} from "pixi.js";

export const CARD_SETS = ["hearts", "diamonds", "club", "speads", "joker"];
export const CARD_WIDTH = 125;
export const CARD_HEIGHT = 181;
export const CARD_DECK = (() => {
    const deck:{[key:string]:Rectangle[]} = {};
    
    for (let r = 0; r < 5; r++) {
        const frames = [];
        for (let c = 0; c < 13; c++) {
            frames.push(new Rectangle(c * CARD_WIDTH, r * CARD_HEIGHT, CARD_WIDTH, CARD_HEIGHT));
        }
        deck[CARD_SETS[r]] = frames;
    }
    return deck;
})();

export class Card extends Container{
    public readonly name: string;
    public readonly set: string;
    public readonly value: number;
    public readonly face: Sprite;
    public readonly back: Sprite;
    constructor(name: string, textureF: Texture, textureB: Texture) {
        super();
        this.name = name;
        this.set = name.split("_")[0];
        this.value = parseInt(name.split("_")[1]);
        this.face = this.createSprite(textureF);
        this.back = this.createSprite(textureB);
        this.interactive = true;
        this.buttonMode = true;
        this.face.visible = false;
        this.on("pointerdown", () => {
            this.flip();
        });
    }

    public flip() {
        if(this.face.visible) {
            this.removeChild(this.face);
            this.addChild(this.back);
        } else {
            this.removeChild(this.back);
            this.addChild(this.face);
        }
        this.face.visible = !this.face.visible;
    }

    private createSprite(texture: Texture): Sprite {
        let s = new Sprite(texture);
        s.anchor.set(0.5);
        this.addChild(s);
        return s;
    }
}
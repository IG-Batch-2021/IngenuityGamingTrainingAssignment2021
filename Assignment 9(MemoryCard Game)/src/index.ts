import { Application, BitmapText, Text, Graphics } from "pixi.js";
import { Loader } from "./Loader";
import { Card, CARD_DECK, CARD_SETS } from "./Card";
const app = new Application({
  width: 1200,
  height: 720,
  view: document.getElementById("my-canvas") as HTMLCanvasElement,
  backgroundColor: 0x202020,
  antialias: true,
});
const loader = new Loader();
loader.start((l, r) => {
  console.log(r);
  const card_back = Loader.getTextureFromSpritesheet(
    "cards",
    CARD_DECK["joker"][0]
  );
  // let card1Name = getCardFace();
  // let card2Name = getCardFace();
  // const card1 = new Card(card1Name.name, card1Name.texture, card_back);
  // const card2 = new Card(card2Name.name, card2Name.texture, card_back);
  // card1.x = 100;
  // card1.y = 100;
  // card2.x = 100 + card1.width;
  // card2.y = 100;
  // app.stage.addChild(card1);
  // app.stage.addChild(card2);
  let cards: Card[] = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 4; j++) {
      const cardFace = getCardFace();
      const card = new Card(cardFace.name, cardFace.texture, card_back);
      card.x = i * card.width + 80;
      card.y = j * card.height + 90;
      app.stage.addChild(card);
      cards.push(card);
    }
  }

  function enableCards() {
    cards.forEach((card) => {
      card.interactive = true;
      card.buttonMode = true;
    });
  }

  function disableCards() {
    cards.forEach((card) => {
      card.interactive = false;
      card.buttonMode = false;
    });
  }

  app.stage.interactive = true;
  let cardSelections: Card[] = [];
  app.stage.on("pointerdown", (e) => {
    console.log(e);
    const card = e.target as Card;
    card.interactive = false;
    cardSelections.push(card);

    if (cardSelections.length === 2) {
      disableCards();
      if (cardSelections[0].name === cardSelections[1].name) {
        cardSelections.forEach((c) => {
          cards = cards.filter((card) => card !== c);
          c.destroy();
        });
        cardSelections = [];
        enableCards();
      } else {
        setTimeout(() => {
          cardSelections.forEach((c) => {
            c.flip();
          });
          cardSelections = [];
          enableCards();
        }, 1000);
      }
    }
  });
});

function getCardFace() {
  const randomSet =
    CARD_SETS[Math.floor(Math.random() * (CARD_SETS.length - 1))];
  const set = CARD_DECK[randomSet];
  const randomFrame = Math.floor(Math.random() * set.length);
  const texture = Loader.getTextureFromSpritesheet("cards", set[randomFrame]);
  return {
    texture,
    name: `${randomSet}_${String(randomFrame).padStart(2, "0")}`,
  };
}

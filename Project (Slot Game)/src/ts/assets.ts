export type Assets = {
  baseUrl: string;
  images: { key: string, url: string }[];
};
export default {
  baseUrl: './assets/',
  images: [
    {
      key: 'gameBG',
      url: 'img/baseGame/background.jpg',
    },
    {
      key: 'reelBG',
      url: 'img/baseGame/reelBackground.png',
    },
    {
      key: 'gameLogo',
      url: 'img/baseGame/Logo.png',
    },
    {
      key: 'commonUI',
      url: 'img/buttonPanel/Common_ui.json',
    },
    {
      key: 'symbols',
      url: 'img/symbols/symbols.json',
    },
    {
      key: 'symbolsBlur',
      url: 'img/symbols/symbols_blur.json',
    },
  ],
};

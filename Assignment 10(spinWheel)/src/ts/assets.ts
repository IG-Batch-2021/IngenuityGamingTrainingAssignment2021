export type Assets = {
    baseUrl: string;
    images: { key: string, url: string }[];
};
export default {
    baseUrl: './assets/',
    images: [
        {
            key: 'wheel',
            url: 'img/wheel.png',
        },
        {
            key: 'pointer',
            url: 'img/pointer.png',
        },
        {
            key: 'jackpot',
            url: 'img/jackpot.png',
        },
    ],
};
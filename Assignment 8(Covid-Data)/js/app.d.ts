declare const searchBtn: HTMLButtonElement;
declare let selectRange: any;
declare const getAllData: (url: string, country: string, method: string, header: Headers) => Promise<any>;
declare function filterData(data: Promise<any>): any;
declare const newsBtn: HTMLButtonElement;
declare let selectNewsRange: any;
declare const getAllNews: (url: string, news: string, method: string, header: Headers) => Promise<any>;
declare function filterNews(data: any): void;
declare const treatmentBtn: HTMLButtonElement;
declare const getTreatmentData: (url: string, country: string, method: string, header: Headers) => Promise<any>;
declare function filterTreatment(data: any): void;
declare let covidData: HTMLDivElement;
declare function createCard(continent: string, country: string, tCasesNumber: number, tRecoveryNumber: number, aCasesNumber: number): void;
declare let newsData: HTMLDivElement;
declare function createNewsCard(title: string, content: string, pubdate: string, reference: string, link: string): void;
declare function formateDate(date: string): string;
declare let treatmentData: HTMLDivElement;
declare function createTreatmentCard(category: string, description: string, funder: string, lastUpdated: string, nextSteps: string): void;
//# sourceMappingURL=app.d.ts.map
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const searchBtn = document.getElementById('search-btn');
let selectRange;
searchBtn.addEventListener("click", () => {
    let countryName = document.getElementById('country').value;
    selectRange = document.getElementById('selectRange').value;
    let url = "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/";
    let method = "GET";
    let header = new Headers({
        'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
        'x-rapidapi-key': 'bdea297777mshb53f53d0f52d568p1bd596jsnb5f6b97e6717'
    });
    getAllData(url, countryName, method, header);
    console.log(countryName);
    console.log(selectRange);
});
const getAllData = (url, country, method, header) => __awaiter(void 0, void 0, void 0, function* () {
    let searchURL = url.concat(country);
    const allData = yield fetch(searchURL, {
        "method": method,
        "headers": header
    })
        .then(response => {
        setTimeout(function () {
            alert('Data Added ');
        }, 2000);
        console.log(filterData(response.json()));
    })
        .catch(err => {
        console.log("You might not connected to Internet.");
        alert("You might not connected to Internet.");
    });
});
function filterData(data) {
    let length;
    printData();
    function printData() {
        data.then((a) => {
            if (selectRange == -1) {
                length = 5;
            }
            else {
                length = (selectRange < a.length) ? selectRange : a.length;
            }
            console.log(a);
            for (let i = 0; i < length; i++) {
                if (a[i].Country != "Total:")
                    createCard(a[i].Continent, a[i].Country, a[i].TotalCases, a[i].TotalRecovered, a[i].ActiveCases);
            }
        });
    }
}
const newsBtn = document.getElementById('news-btn');
let selectNewsRange;
newsBtn.addEventListener("click", () => {
    let news = document.getElementById('news').value;
    selectNewsRange = document.getElementById('selectRange').value;
    let url = "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-";
    let method = "GET";
    let header = new Headers({
        'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
        'x-rapidapi-key': 'bdea297777mshb53f53d0f52d568p1bd596jsnb5f6b97e6717'
    });
    getAllNews(url, news, method, header);
    console.log(news);
});
const getAllNews = (url, news, method, header) => __awaiter(void 0, void 0, void 0, function* () {
    let searchURL = url.concat(news);
    const allNews = yield fetch(searchURL, {
        "method": method,
        "headers": header
    })
        .then(response => response.json())
        .then((response) => {
        setTimeout(function () {
            alert('Data Added ');
        }, 2000);
        filterNews(response);
    })
        .catch(err => {
        console.log("You might not connected to Internet.");
        alert("You might not connected to Internet.");
    });
});
function filterNews(data) {
    console.log(data);
    for (let i = 0; i < data.news.length; i++) {
        createNewsCard(data.news[i].title, data.news[i].content, data.news[i].pubDate, data.news[i].reference, data.news[i].link);
    }
}
const treatmentBtn = document.getElementById('treatment-btn');
treatmentBtn.addEventListener("click", () => {
    let treatment = document.getElementById('treatment').value;
    let url = "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-all-";
    let method = "GET";
    let header = new Headers({
        'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
        'x-rapidapi-key': 'bdea297777mshb53f53d0f52d568p1bd596jsnb5f6b97e6717'
    });
    getTreatmentData(url, treatment, method, header);
    console.log("Treatment Data");
});
const getTreatmentData = (url, country, method, header) => __awaiter(void 0, void 0, void 0, function* () {
    let treatmentUrl = url.concat(country);
    const treatmentData = yield fetch(treatmentUrl, {
        "method": method,
        "headers": header
    })
        .then(response => response.json())
        .then((response) => {
        setTimeout(function () {
            alert('Data Added ');
        }, 2000);
        filterTreatment(response);
    })
        .catch(err => {
        console.log("You might not connected to Internet.");
        alert("You might not connected to Internet.");
    });
});
function filterTreatment(data) {
    printTreatmentData();
    console.log(data);
    function printTreatmentData() {
        for (let i = 0; i < data.length; i++) {
            createTreatmentCard(data[i].category, data[i].description, data[i].funder, data[i].lastUpdated, data[i].nextSteps);
        }
    }
}
let covidData = document.createElement('div');
covidData.setAttribute("class", "covidData");
function createCard(continent, country, tCasesNumber, tRecoveryNumber, aCasesNumber) {
    let card = document.createElement('div');
    card.setAttribute("class", "card");
    let hr = document.createElement('hr');
    let lineBreak = document.createElement('br');
    let continentName = document.createElement('div');
    continentName.setAttribute("class", "continentName");
    continentName.textContent = continent;
    let countryName = document.createElement('div');
    countryName.setAttribute("class", "countryName");
    countryName.textContent = country;
    let totalCases = document.createElement('div');
    totalCases.setAttribute("class", "totalCases");
    let totalCasesText = document.createElement('h2');
    totalCasesText.setAttribute("class", "cardText");
    totalCasesText.textContent = "Total Cases";
    let totalCasesNumber = document.createElement('h3');
    totalCasesNumber.setAttribute("class", "cardNumber");
    totalCasesNumber.textContent = tCasesNumber.toString();
    totalCases.appendChild(totalCasesText);
    totalCases.appendChild(totalCasesNumber);
    let totalRecovery = document.createElement('div');
    totalRecovery.setAttribute("class", "totalRecovery");
    let totalRecoveryText = document.createElement('h2');
    totalRecoveryText.setAttribute("class", "cardText");
    totalRecoveryText.textContent = "Total Recovered";
    let totalRecoveryNumber = document.createElement('h3');
    totalRecoveryNumber.setAttribute("class", "cardNumber");
    totalRecoveryNumber.textContent = tRecoveryNumber.toString();
    totalRecovery.appendChild(totalRecoveryText);
    totalRecovery.appendChild(totalRecoveryNumber);
    let activeCases = document.createElement('div');
    activeCases.setAttribute("class", "activeCases");
    let activeCasesText = document.createElement('h2');
    activeCasesText.setAttribute("class", "cardText");
    activeCasesText.textContent = "Active Cases";
    let activeCasesNumber = document.createElement('h3');
    activeCasesNumber.setAttribute("class", "cardNumber");
    activeCasesNumber.textContent = aCasesNumber.toString();
    activeCases.appendChild(activeCasesText);
    activeCases.appendChild(activeCasesNumber);
    let br = document.createElement('br');
    card.appendChild(continentName);
    card.appendChild(hr);
    card.appendChild(countryName);
    card.appendChild(hr);
    card.appendChild(lineBreak);
    card.appendChild(totalCases);
    card.appendChild(totalRecovery);
    card.appendChild(activeCases);
    const newsDataHolder = document.getElementsByClassName('newsData');
    console.log(newsDataHolder);
    covidData.appendChild(card);
    document.body.appendChild(covidData);
    console.log("card created.");
    console.log(card);
}
let newsData = document.createElement('div');
newsData.setAttribute("class", "newsData");
function createNewsCard(title, content, pubdate, reference, link) {
    let newsCard = document.createElement('div');
    newsCard.setAttribute("class", "newsCard");
    let hr = document.createElement('hr');
    let lineBreak = document.createElement('br');
    let titleText = document.createElement('div');
    titleText.setAttribute("class", "title");
    titleText.textContent = "Title";
    let titleContent = document.createElement('div');
    titleContent.setAttribute("class", "titleContent");
    titleContent.textContent = title;
    let contentText = document.createElement('div');
    contentText.setAttribute("class", "content");
    contentText.textContent = "Content";
    let contentContent = document.createElement('div');
    contentContent.setAttribute("class", "contentContent");
    contentContent.textContent = title;
    let date = document.createElement('div');
    date.setAttribute("class", "date");
    date.textContent = "Publish on";
    let pubDate = document.createElement('div');
    pubDate.setAttribute("class", "pubDate");
    pubDate.textContent = formateDate(pubdate);
    let referenceText = document.createElement('div');
    referenceText.setAttribute("class", "referenceText");
    referenceText.textContent = "Reference";
    let referenceContent = document.createElement('div');
    referenceContent.setAttribute("class", "reference");
    referenceContent.textContent = reference;
    let linkTag = document.createElement('a');
    linkTag.setAttribute("class", "link");
    linkTag.setAttribute("href", link);
    linkTag.textContent = "Link";
    newsCard.appendChild(referenceText);
    newsCard.appendChild(referenceContent);
    newsCard.appendChild(date);
    newsCard.appendChild(pubDate);
    newsCard.appendChild(contentText);
    newsCard.appendChild(contentContent);
    newsCard.appendChild(hr);
    newsCard.appendChild(lineBreak);
    newsCard.appendChild(hr);
    newsCard.appendChild(linkTag);
    newsData.appendChild(newsCard);
    document.body.appendChild(newsData);
    console.log("News card created.");
    console.log(newsCard);
}
function formateDate(date) {
    let day = date.charAt(8) + date.charAt(9);
    let month = date.charAt(5) + date.charAt(6);
    let year = date.charAt(0) + date.charAt(1) + date.charAt(2) + date.charAt(3);
    let formatedDate = day + "-" + month + "-" + year;
    return formatedDate;
}
let treatmentData = document.createElement('div');
treatmentData.setAttribute("class", "treatmentData");
function createTreatmentCard(category, description, funder, lastUpdated, nextSteps) {
    let treatmentCard = document.createElement('div');
    treatmentCard.setAttribute("class", "treatmentCard");
    let hr = document.createElement('hr');
    let lineBreak = document.createElement('br');
    let categoryText = document.createElement('div');
    categoryText.setAttribute("class", "category");
    categoryText.textContent = "Category";
    let categoryContent = document.createElement('div');
    categoryContent.setAttribute("class", "categoryContent");
    categoryContent.textContent = category;
    let descriptionText = document.createElement('div');
    descriptionText.setAttribute("class", "description");
    descriptionText.textContent = "Description";
    let descriptionContent = document.createElement('div');
    descriptionContent.setAttribute("class", "contentContent");
    descriptionContent.textContent = description;
    let funderText = document.createElement('div');
    funderText.setAttribute("class", "funder");
    funderText.textContent = "Funder";
    let funderContent = document.createElement('div');
    funderContent.setAttribute("class", "funderContent");
    funderContent.textContent = funder;
    let lastUpdatedText = document.createElement('div');
    lastUpdatedText.setAttribute("class", "lastUpdated");
    lastUpdatedText.textContent = "Last Updated";
    let lastUpdatedContext = document.createElement('div');
    lastUpdatedContext.setAttribute("class", "lastUpdatedContext");
    lastUpdatedContext.textContent = lastUpdated;
    let nextStepsText = document.createElement('a');
    nextStepsText.setAttribute("class", "nextSteps");
    nextStepsText.textContent = "Next Steps Text";
    let nextStepsTextContent = document.createElement('div');
    nextStepsTextContent.setAttribute("class", "nextStepsContent");
    nextStepsTextContent.textContent = nextSteps;
    treatmentCard.appendChild(categoryText);
    treatmentCard.appendChild(categoryContent);
    treatmentCard.appendChild(descriptionText);
    treatmentCard.appendChild(descriptionContent);
    treatmentCard.appendChild(funderText);
    treatmentCard.appendChild(funderContent);
    treatmentCard.appendChild(lastUpdatedText);
    treatmentCard.appendChild(lastUpdatedContext);
    treatmentCard.appendChild(nextStepsText);
    treatmentCard.appendChild(nextStepsTextContent);
    treatmentData.appendChild(treatmentCard);
    document.body.appendChild(treatmentData);
    console.log("treatement data");
}
//# sourceMappingURL=app.js.map
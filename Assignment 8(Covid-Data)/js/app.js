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
searchBtn.addEventListener("click", () => {
    let countryName = document.getElementById('country').value;
    let url = "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/";
    let method = "GET";
    let header = new Headers({
        'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
        'x-rapidapi-key': 'bdea297777mshb53f53d0f52d568p1bd596jsnb5f6b97e6717'
    });
    getAllData(url, countryName, method, header);
    console.log(countryName);
});
const getAllData = (url, country, method, header) => __awaiter(void 0, void 0, void 0, function* () {
    let searchURL = url.concat(country);
    const allData = yield fetch(searchURL, {
        "method": method,
        "headers": header
    })
        .then(response => {
        console.log(filterData(response.json()));
    })
        .catch(err => {
        console.error(err);
    });
});
function filterData(data) {
    let length;
    printAddress();
    function printAddress() {
        data.then((a) => {
            console.log("-------------");
            for (let i = 0; i < a.length; i++) {
                console.log("id: " + a[i].id + " Rank: " + a[i].rank + " ActiveCases: " + a[i].ActiveCases + " Case Fatality Rate: " + a[i].Case_Fatality_Rate + " Continent: " + a[i].Continent + " Contry: " + a[i].Country);
            }
            console.log("-------------");
        });
    }
}
//# sourceMappingURL=app.js.map
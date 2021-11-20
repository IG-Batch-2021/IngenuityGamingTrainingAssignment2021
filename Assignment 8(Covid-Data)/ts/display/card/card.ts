let covidData = document.createElement('div');
covidData.setAttribute("class", "covidData");

function createCard(continent: string, country: string, tCasesNumber: number, tRecoveryNumber: number, aCasesNumber: number): void {
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

    // Total Cases
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


    // Total Recovery
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

    // Active Cases
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
    // card.appendChild(br);

    const newsDataHolder: any = document.getElementsByClassName('newsData');
    console.log(newsDataHolder);

    covidData.appendChild(card);
    document.body.appendChild(covidData);

    console.log("card created.");
    console.log(card);
}
function createHeading(heading: string) {
    let cardHeading = document.createElement('div');
    cardHeading.setAttribute("class", "cardDataHeading");
    cardHeading.textContent = heading;

    covidDataDisplayer.appendChild(cardHeading);
}
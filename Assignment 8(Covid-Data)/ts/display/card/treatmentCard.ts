let treatmentData = document.createElement('div');
treatmentData.setAttribute("class", "treatmentData");

function createTreatmentCard(category: string, description: string, funder: string, lastUpdated: string, nextSteps: string): void {
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

    // description
    let descriptionText = document.createElement('div');
    descriptionText.setAttribute("class", "description");
    descriptionText.textContent = "Description";

    let descriptionContent = document.createElement('div');
    descriptionContent.setAttribute("class", "contentContent");
    descriptionContent.textContent = description;

    //funder
    let funderText = document.createElement('div');
    funderText.setAttribute("class", "funder");
    funderText.textContent = "Funder";

    let funderContent = document.createElement('div');
    funderContent.setAttribute("class", "funderContent");
    funderContent.textContent = funder;

    //lastUpdated
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
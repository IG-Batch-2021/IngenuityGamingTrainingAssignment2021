const treatmentBtn = <HTMLButtonElement>document.getElementById('treatment-btn');
let treatmentDataCleaner: any = document.querySelector('.treatementData');

treatmentBtn.addEventListener("click", () => {
    treatmentDataCleaner.innerHTML = "";
    let treatment: string = (<HTMLInputElement>document.getElementById('treatment')).value;
    let url: string = "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-all-";
    let method: string = "GET";
    let header = new Headers({
        'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
        'x-rapidapi-key': 'bdea297777mshb53f53d0f52d568p1bd596jsnb5f6b97e6717'
    })
    
    getTreatmentData(url, treatment, method, header);
    console.log("Treatment Data");

})

const getTreatmentData = async (url: string, country: string, method: string, header: Headers): Promise<any> => {
    let treatmentUrl: string = url.concat(country);

    const treatmentData = await fetch(treatmentUrl, {
        "method": method,
        "headers": header
    })
    .then(response => response.json())
    .then((response) => {
        setTimeout(function() { 
            alert('Data Added '); 
        }, 2000);

        filterTreatment(response);
    })
    .catch(err => {
        console.log("You might not connected to Internet.");
        alert("You might not connected to Internet.");
        // console.error(err);
    });
    
}


function filterTreatment(data: any): void {
    printTreatmentData();
    console.log(data);

    function printTreatmentData() {
        for(let i=0; i<data.length; i++) {
            // console.log(data[i].phase);
            createTreatmentCard(data[i].category, data[i].description, data[i].funder, data[i].lastUpdated, data[i].nextSteps);
        }
    }
}
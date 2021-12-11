const searchBtn = <HTMLButtonElement>document.getElementById('search-btn');
let covidDataCleaner : any = document.querySelector('.covidData');
let selectRange: any;


searchBtn.addEventListener("click", () => {
    covidDataCleaner.innerHTML = "";
    let countryName: string = (<HTMLInputElement>document.getElementById('country')).value;
    selectRange = (<HTMLInputElement>document.getElementById('selectRange')).value;
    
    let url: string = "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/";
    let method: string = "GET";
    let header = new Headers({
        'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
        'x-rapidapi-key': 'bdea297777mshb53f53d0f52d568p1bd596jsnb5f6b97e6717'
    })
    
    getAllData(url, countryName, method, header);

    console.log(countryName)
})

const getAllData = async (url: string, country: string, method: string, header: Headers): Promise<any> => {
    let searchURL: string = url.concat(country);
    // allData;
    const allData = await fetch(searchURL, {
        "method": method,
        "headers": header
    })
    .then(response => {
        // console.log(response.json());
        setTimeout(function() { 
            alert('Data Added '); 
        }, 2000);
        console.log(filterData(response.json()));
    })
    .catch(err => {
        console.log("You might not connected to Internet.");
        alert("You might not connected to Internet.");
        // console.error(err);
    });
    
}

function filterData(data: Promise<any>): any {
    let length;
    // createHeading("Covid Country Data");
    printData();

    
    function printData() {
        data.then((a) => {
            if(selectRange == -1) {
                length = 5;
            } else {
                length = (selectRange < a.length) ? selectRange : a.length;
            }
            console.log("You fetch data of "+length+" length.")
            for(let i=0; i<length; i++) {
                if(a[i].Country != "Total:")
                    createCard(a[i].Continent, a[i].Country, a[i].TotalCases, a[i].TotalRecovered, a[i].ActiveCases);
            }
        });
    }
}
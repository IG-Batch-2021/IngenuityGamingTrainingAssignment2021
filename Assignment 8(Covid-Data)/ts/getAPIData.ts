const searchBtn = <HTMLButtonElement>document.getElementById('search-btn');
let selectRange: any;

searchBtn.addEventListener("click", () => {
    setTimeout(function() { 
        alert('Data Added '); 
  }, 5000);
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
    console.log(selectRange)
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
        console.log(filterData(response.json()));
    })
    .catch(err => {
        console.error(err);
    });
    
}

function filterData(data: Promise<any>): any {
    let length;
    printData();

    function printData() {
        data.then((a) => {
            if(selectRange == -1) {
                length = Number.MAX_SAFE_INTEGER;
            } else {
                length = (selectRange < a.length) ? selectRange : a.length;
            }
            console.log(a);
            for(let i=0; i<length; i++) {
                // console.log("id: "+a[i].id+" Rank: "+a[i].rank+" ActiveCases: "+a[i].ActiveCases+" Case Fatality Rate: "+a[i].Case_Fatality_Rate+" Continent: "+a[i].Continent+" Contry: "+a[i].Country);
                if(a[i].Country != "Total:")
                    createCard(a[i].Continent, a[i].Country, a[i].TotalCases, a[i].TotalRecovered, a[i].ActiveCases);
            }
        });
    }
}
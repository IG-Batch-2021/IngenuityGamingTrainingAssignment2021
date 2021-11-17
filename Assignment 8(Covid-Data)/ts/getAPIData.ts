// export class APIData {

    const searchBtn = <HTMLButtonElement>document.getElementById('search-btn');
    
    searchBtn.addEventListener("click", () => {
        let countryName: string = (<HTMLInputElement>document.getElementById('country')).value;
        
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

        const allData = await fetch(searchURL, {
            "method": method,
            "headers": header
        })
        .then(response => {
            console.log(response.json());
        })
        .catch(err => {
            console.error(err);
        });
        
    }

// }
const search = document.getElementById('country');
const btn = document.getElementById('search-btn');

btn.addEventListener("click", function() {
    getData();
})

function getData() {
    let url = "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/";
    let countryName = search.value;
    console.log(countryName)
    url = url.concat(countryName);
    console.log(url)
    let method = "GET";
    let header = {
            'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
            'x-rapidapi-key': 'bdea297777mshb53f53d0f52d568p1bd596jsnb5f6b97e6717'
    }

    // fetch(url, {
    //     "method": method,
    //     "headers": header
    // }).then(response => {
    //     console.log('data recieved.');
    //     return response.json();
    // }).then((data => {
    //     console.log(data)
    // }))

    fetch(url, {
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
const newsBtn = <HTMLButtonElement>document.getElementById('news-btn');
let newsDataCleaner: any = document.querySelector('.newsData');
let selectNewsRange : any;

newsBtn.addEventListener("click", () => {
    newsDataCleaner.innerHTML = "";
    let news: string = (<HTMLInputElement>document.getElementById('news')).value;
    selectNewsRange = (<HTMLInputElement>document.getElementById('selectRange')).value;
    
    let url: string = "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-";
    let method: string = "GET";
    let header = new Headers({
        'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
        'x-rapidapi-key': 'bdea297777mshb53f53d0f52d568p1bd596jsnb5f6b97e6717'
    })
    
    getAllNews(url, news, method, header);

    console.log(news)
})

const getAllNews = async (url: string, news: string, method: string, header: Headers): Promise<any> => {
    let searchURL: string = url.concat(news);
    console.log(url)
    console.log(news)
    console.log(searchURL)
    
    const allNews = await fetch(searchURL, {
        "method": method,
        "headers": header
    })
    .then(response =>  response.json())
    .then((response) => {
        setTimeout(function() { 
            alert('Data Added '); 
        }, 1000);
        filterNews(response);
    })
    .catch(err => {
        console.log("You might not connected to Internet.");
        alert("You might not connected to Internet.");
        // console.error(err);
    });
}

function filterNews(data: any): void {
    let length;
    // createHeading("News Data");
    console.log(data);
    if(selectNewsRange == -1) {
        length = 5;
    } else {
        
        length = (selectNewsRange < data.news.length) ? selectNewsRange : data.news.length;
    }
    console.log("You fetch data of "+length+" length.")
    for(let i=0; i<data.news.length; i++) {
        createNewsCard(data.news[i].title, data.news[i].content, data.news[i].pubDate, data.news[i].reference, data.news[i].link);
    }
    // const newsDataHolder = document.getElementsByClassName('newsData');
    // console.log(newsDataHolder);
}
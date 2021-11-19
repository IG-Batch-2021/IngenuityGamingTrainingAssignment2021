let newsData = document.createElement('div');
newsData.setAttribute("class", "newsData");

function createNewsCard(title: string, content: string, pubdate: string, reference: string, link: string): void {
    let newsCard = document.createElement('div');
    newsCard.setAttribute("class", "newsCard");

    let hr = document.createElement('hr');
    let lineBreak = document.createElement('br');

    let titleText = document.createElement('div');
    titleText.setAttribute("class", "title");
    titleText.textContent = "Title";

    let titleContent = document.createElement('div');
    titleContent.setAttribute("class", "titleContent");
    titleContent.textContent = title;

    // Content
    let contentText = document.createElement('div');
    contentText.setAttribute("class", "content");
    contentText.textContent = "Content";

    let contentContent = document.createElement('div');
    contentContent.setAttribute("class", "contentContent");
    contentContent.textContent = title;

    //Date
    let date = document.createElement('div');
    date.setAttribute("class", "date");
    date.textContent = "Publish on";

    let pubDate = document.createElement('div');
    pubDate.setAttribute("class", "pubDate");
    pubDate.textContent = formateDate(pubdate);

    let referenceText = document.createElement('div');
    referenceText.setAttribute("class", "referenceText");
    referenceText.textContent = "Reference";

    let referenceContent = document.createElement('div');
    referenceContent.setAttribute("class", "reference");
    referenceContent.textContent = reference;

    let linkTag = document.createElement('a');
    linkTag.setAttribute("class", "link");
    linkTag.setAttribute("href", link);
    linkTag.textContent = "Link";

    newsCard.appendChild(titleText);
    newsCard.appendChild(titleContent);
    newsCard.appendChild(hr);
    newsCard.appendChild(contentText);
    newsCard.appendChild(contentContent);
    newsCard.appendChild(hr);
    newsCard.appendChild(date);
    newsCard.appendChild(pubDate);
    newsCard.appendChild(hr);
    newsCard.appendChild(referenceText);
    newsCard.appendChild(referenceContent);
    newsCard.appendChild(lineBreak);
    newsCard.appendChild(hr);
    newsCard.appendChild(linkTag);

    newsData.appendChild(newsCard);
    document.body.appendChild(newsData);

    console.log("News card created.");
    console.log(newsCard);
}

function formateDate(date: string) {
    let day: string = date.charAt(8)+date.charAt(9);
    let month: string = date.charAt(5)+date.charAt(6);
    let year: string = date.charAt(0)+date.charAt(1)+date.charAt(2)+date.charAt(3);
    
    let formatedDate: string = day+"-"+month+"-"+year;

    return formatedDate;
}
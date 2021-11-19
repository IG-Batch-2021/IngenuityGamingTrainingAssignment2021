function createNewsCard(title, content, pubdate, reference, link) {
    var newsCard = document.createElement('div');
    newsCard.setAttribute("class", "newsCard");
    var hr = document.createElement('hr');
    var lineBreak = document.createElement('br');
    var titleText = document.createElement('div');
    titleText.setAttribute("class", "title");
    titleText.textContent = "Title";
    var titleContent = document.createElement('div');
    titleContent.setAttribute("class", "titleContent");
    titleContent.textContent = title;
    // Content
    var contentText = document.createElement('div');
    contentText.setAttribute("class", "content");
    contentText.textContent = "Content";
    var contentContent = document.createElement('div');
    contentContent.setAttribute("class", "contentContent");
    contentContent.textContent = title;
    //Date
    var date = document.createElement('div');
    date.setAttribute("class", "date");
    date.textContent = "Publish on";
    var pubDate = document.createElement('div');
    pubDate.setAttribute("class", "pubDate");
    pubDate.textContent = formateDate(pubdate);
    var referenceText = document.createElement('div');
    referenceText.setAttribute("class", "referenceText");
    referenceText.textContent = "Reference";
    var referenceContent = document.createElement('div');
    referenceContent.setAttribute("class", "reference");
    referenceContent.textContent = reference;
    var linkTag = document.createElement('a');
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
    document.body.appendChild(newsCard);
    console.log("News card created.");
    console.log(newsCard);
}
function formateDate(date) {
    var day = date.charAt(8) + date.charAt(9);
    var month = date.charAt(5) + date.charAt(6);
    var year = date.charAt(0) + date.charAt(1) + date.charAt(2) + date.charAt(3);
    var formatedDate = day + "-" + month + "-" + year;
    return formatedDate;
}

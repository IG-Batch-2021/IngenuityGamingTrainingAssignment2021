var input = "key is press: ";

let btnArr = [];

for(let i = 65; i <= 90; i++) {
    const btn = document.getElementById(`card${String.fromCharCode(i)}`);
    btn.addEventListener("click", onAlphabetClick)
    btnArr.push(btn);
}


function onAlphabetClick(e) {
    console.log(e)
    console.log(e.srcElement.innerText);
}
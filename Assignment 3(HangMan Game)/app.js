var input = "";
const words = ["java", "c", "php", "html", "css", "kotlin", "python", "go", "javascript", "react", "node", "c++", "c#", "swift", "r", "typescript", "sql", "ruby", "perl", "dart", "xml",];
console.log(words.length)
const max = 21;
const min = 0;
const randomNumber = Math.floor(Math.random()*(max - min + 1) + min);
// var word = words[randomNumber];
console.log(words[randomNumber])
var word = "Ingenuitygaming"
word = word.toUpperCase();
let val = "";
for(let i=0; i<word.length; i++) {
    val += "_";
}

let btnArr = [];
let countWrong = 0;

for(let i = 65; i <= 90; i++) {
    const btn = document.getElementById(`card${String.fromCharCode(i)}`);
    btn.addEventListener("click", onAlphabetClick)
    btnArr.push(btn);
}
console.log(btnArr)


function onAlphabetClick(e) {
    let key = e.srcElement.innerText
    var ch = checkWord(key);
    let id = e.srcElement.id
    if(ch) trueDisableBtn(id); else falseDisableBtn(id);
}

function trueDisableBtn(id) {
    document.getElementById(id).style = "border-color: green; background-color: lightgreen; color: green;";
}
function falseDisableBtn(id) {
    if(countWrong == 4) {
        alert("Game Over");
        return;
    }
    countWrong++;
    document.getElementById(id).style = "border-color: red; background-color: rgb(252, 185, 185); color: red;";
    let bodyPart = "";
    switch(countWrong) {
        case 1: bodyPart = "face"; break;
        case 2: bodyPart = "body"; break;
        case 3: bodyPart = "hand"; break;
        case 4: bodyPart = "legs"; break;
        default: bodyPart = "";
    }
    document.getElementById(bodyPart).style.borderColor = "black";
}

let index = [];
function checkWord(key) {
    let check = 0;
    for(let i=0; i<word.length; i++) {
        if(key.charAt(0) === word.charAt(i)) {
            index.push(i)
            input += key
            // console.log("in the function")
        } else {
            input += "";
        }
    }
    for(let j=0; j<index.length; j++) {
        val = setCharAt(val, index[j], key.charAt(0));
    }
    if(index.length > 0) check = 1; else check = 0;
    index = [];
    document.getElementById('userGuess').value = val;
    return check;
}
function setCharAt(str, index, chr) {
    if(index > str.length-1) return str;
    return str.substring(0, index) + chr + str.substring(index+1);
}
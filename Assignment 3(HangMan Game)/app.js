const words = ["java", "c", "php", "html", "css", "kotlin", "python", "go", "javascript", "react", "node", "c++", "c#", "swift", "r", "typescript", "sql", "ruby", "perl", "dart", "xml",];
window.onload = () => {
    document.getElementById('userGuess').value = "";
}
const max = 21;
const min = 0;
const randomNumber = Math.floor(Math.random()*(max - min + 1) + min);

var input = "";
var word = words[randomNumber];
// var word = "php";
// var word = "Ingenuitygaming"
console.log(word)
word = word.toUpperCase();

var correctKey = new Audio('sound/win.mp3');
var wrongKey = new Audio('sound/tryagain.mp3');
var gameover = new Audio('sound/gameover.mp3');

var placeholderLength = word.length;
var placeholderText = "";

for(let i=0; i<placeholderLength; i++) {
    placeholderText += "_";
}

document.getElementById('userGuess').placeholder = placeholderText;

let val = "";
for(let i=0; i<word.length; i++) {
    val += "_";
}

let btnArr = [];
let countWrong = 0;

// All Buttons
for(let i = 65; i <= 90; i++) {
    const btn = document.getElementById(`card${String.fromCharCode(i)}`);
    btn.addEventListener("click", onAlphabetClick)
    btnArr.push(btn);
}
// console.log(btnArr)


function onAlphabetClick(e) {
    let key = e.srcElement.innerText
    var ch = checkWord(key);
    let id = e.srcElement.id
    if(ch) trueDisableBtn(id); else falseDisableBtn(id);
}

function trueDisableBtn(id) {
    if(input.length == word.lenght) {
        console.log("you win");
        alert("Congress!, you WIN");
    }
    document.getElementById(id).style = "border-color: green; background-color: lightgreen; color: green;";
    document.getElementById(id).style.pointerEvents = "none";
    // correctKey.play();
}
function falseDisableBtn(id) {
    if(countWrong == 4) {
        const gameoverMessage = `GameOver \r\nThe word is ${word} \r\nPress ok to Restart`;
        gameover.play();
        alert(gameoverMessage);
        window.location.reload();
        return;
    }
    countWrong++;
    document.getElementById(id).style = "border-color: red; background-color: rgb(252, 185, 185); color: red;";
    document.getElementById(id).style.pointerEvents = "none";
    wrongKey.play();

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
    if(checkVal(val)) {
        correctKey.play();
        console.log("You Win");
        document.querySelector('.top').style.display = "none";
        document.querySelector('.down').style.display = "none";
        document.querySelector('.userInput').style.display = "none";
        document.getElementById('win').style.display = "block";
        
    }
    return check;
}
function setCharAt(str, index, chr) {
    if(index > str.length-1) return str;
    return str.substring(0, index) + chr + str.substring(index+1);
}

function checkVal(val) {
    for(let i=0; i<val.length; i++) {
        if(val.charAt(i) == '_')
        return false;
    }
    return true;
}
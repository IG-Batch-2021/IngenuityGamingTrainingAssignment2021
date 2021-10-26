const randomNumber = 45;

const one = document.getElementById("one");
const two = document.getElementById("two");
const result = document.querySelector("#result");
const btn = document.querySelector("#playbtn");

const userNumber = one.value*10 + two.value;

btn.addEventListener(click, function() {
    result.innerHTML = "";
    if(userNumber === randomNumber) {
        result.innerHTML = "Guess is correct.";
    } else if(userName > randomeNumber) {
        result.innerHTML = "Guess is large.";
    } else if(userName < randomeNumber) {
        result.innerHTML = "Guess is small.";
    } else {
        result.innerHTML = "Something goes Wrongs.";
    }
})


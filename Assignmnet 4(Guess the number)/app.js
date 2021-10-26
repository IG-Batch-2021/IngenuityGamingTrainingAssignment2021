const randomNumber = 45;

const one = document.querySelector('#one');
const two = document.getElementById("two");
const result = document.querySelector("#result");

const btn = document.querySelector("#playbtn");


btn.addEventListener('click', function() {
    var userNumber = one.value+two.value;

    result.innerHTML = "";
    if(userNumber == randomNumber) {
        result.innerHTML = "Guess is correct.";
    } else if(userNumber > randomNumber) {
        result.innerHTML = "Guess is large.";
    } else if(userNumber < randomNumber) {
        result.innerHTML = "Guess is small.";
    } else {
        result.innerHTML = "Something goes Wrongs.";
    }
})
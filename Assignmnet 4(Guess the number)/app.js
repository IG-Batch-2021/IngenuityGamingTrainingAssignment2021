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
        document.getElementById('result').style = "color: darkgreen; background: rgb(193, 255, 193);";
        document.getElementById('container').style.background = "linear-gradient(360deg, darkgreen, lightgreen);";
    } else if(userNumber > randomNumber) {
        result.innerHTML = "Guess is large.";
        document.getElementById('result').style = "color: darkgreen; background: rgb(193, 255, 193);";
    } else if(userNumber < randomNumber) {
        result.innerHTML = "Guess is small.";
        document.getElementById('conatiner').style.background =  "linear-gradient(360deg, darkred, rgb(255, 198, 198))";
    } else {
        result.innerHTML = "Something goes Wrongs.";
    }
})
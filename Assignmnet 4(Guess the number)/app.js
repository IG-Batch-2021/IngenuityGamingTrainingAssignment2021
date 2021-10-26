const randomNumber = Math.floor(Math.random()*100)
console.warn(randomNumber)

const one = document.querySelector('#one');
// const two = document.getElementById("two");
const result = document.querySelector("#result");

const btn = document.querySelector("#playbtn");

btn.addEventListener('click', function() {
    var userNumber = one.value;

    result.innerHTML = "";
    if(userNumber == randomNumber) {
        result.innerHTML = "Guess is correct.";
        document.getElementById('result').style = "color: darkgreen; background: rgb(193, 255, 193); margin: 22px 0px;";
        document.body.style.background = "green";
        // document.getElementById('container').style.background = "lightgreen";
    } else if(userNumber > randomNumber) {
        result.innerHTML = "Guess is large.";
        document.getElementById('result').style = "color: darkred; background: rgb(255, 163, 163);";
        // document.getElementById('conatiner').style.background =  "linear-gradient(360deg, darkred, rgb(255, 198, 198))";
        document.body.style.background = "rgb(145, 0, 0)";
    } else if(userNumber < randomNumber) {
        result.innerHTML = "Guess is small.";
        document.getElementById('result').style = "color: darkred; background: rgb(255, 163, 163);";
        // document.getElementById('conatiner').style.background =  "linear-gradient(360deg, darkred, rgb(255, 198, 198))";
        document.body.style.background = "rgb(255, 87, 87)";
    } else {
        result.innerHTML = "Something goes Wrongs.";
    }
})
function tempAlert(msg,duration) {
    var el = document.createElement("div");
    el.setAttribute("style","position:absolute; top:75%; left:55%; background-color:white;");
    el.innerHTML = msg;
    setTimeout(function(){
    el.parentNode.removeChild(el);
    },duration);
    document.body.appendChild(el);
}
const btnA = document.getElementById('cardA');
var input = "key is press: ";

btnA.addEventListener("click", function() {
    input += "A ";
    console.log(input)
})
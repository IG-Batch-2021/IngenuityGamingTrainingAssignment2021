const name = "sketer";
var checkName = "";

const userInput = "s"

for(let j=0; j<userInput.length; j++) {
    console.log(checkName);
    for(let i=0; i<name.length; i++) {
        if(userInput.charAt(j) === name.charAt(i)) {
            checkName += userInput;
        } else {
            checkName += "_";
        }
    }
    console.log(checkName)
}
console.log(1500*78)
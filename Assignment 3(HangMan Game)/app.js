var btn = document.getElementsByClassName('card');
var input = "Key press is: ";

btn.onClick(() =>{
    input.concat(btn.value);
    console.log(input);
});

// console.log(input)

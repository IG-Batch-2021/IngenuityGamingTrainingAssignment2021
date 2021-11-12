const brush = document.getElementById('brush');
const ruler = document.getElementById('ruler');
const rectangle = document.getElementById('rectangle');
const circle = document.getElementById('circle');
const color = document.getElementById('selectColor');

let canvas = document.getElementById('paintArea');
canvas.style.width ='100%';
canvas.style.height='100%';
canvas.width  = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
let c = canvas.getContext('2d');

let rectangleCordinates = [];

let strokeColor = "black";
let fillColor = "transparent";

c.fillStyle = fillColor;
c.strokeStyle = strokeColor;

brush.addEventListener("click", function() {
    console.log("Brush is seleced.");
    document.getElementById('brush').style.color = 'blue';
    document.getElementById('ruler').style.color = 'black';
    document.getElementById('rectangle').style.color = 'black';
    document.getElementById('circle').style.color = 'black';
})

ruler.addEventListener("click", function() {
    console.log("Ruler is selected.");
    document.getElementById('brush').style.color = 'black';
    document.getElementById('ruler').style.color = 'blue';
    document.getElementById('rectangle').style.color = 'black';
    document.getElementById('circle').style.color = 'black';
})

rectangle.addEventListener("click", function() {
    console.log("Rectangle is selected.");
    document.getElementById('brush').style.color = 'black';
    document.getElementById('ruler').style.color = 'black';
    document.getElementById('rectangle').style.color = 'blue';
    document.getElementById('circle').style.color = 'black';
    
})

circle.addEventListener("click", function() {
    console.log("Circle is selected.");
    document.getElementById('brush').style.color = 'black';
    document.getElementById('ruler').style.color = 'black';
    document.getElementById('rectangle').style.color = 'black';
    document.getElementById('circle').style.color = 'blue';
})

color.addEventListener("click", function() {
    strokeColor = color.value;
    console.log(strokeColor);
    console.log(fillColor);
    c.fillStyle = fillColor;
    c.strokeStyle = strokeColor;
})

// canvas.addEventListener("mousemove", getCordinates(event));
let x, y, width, height;
function getCordinates(event) {
    x = event.clientX - 62;
    y = event.clientY - 10;
    
    console.log("cordinates: "+x+" "+y);
    // console.log((x)+" "+(y))
}
function getWidthAndHeight(event) {
    width = event.clientX - x;
    height = event.clientY - y;

    console.log("width: "+width+" Height: "+height);
    c.fillRect(x, y, width, height);
    c.strokeRect(x, y, width, height);
    console.log(x+" "+y+" "+width+" "+height)
}


// c.fillRect(0, 0, 150, 100);
const brush = document.getElementById('brush');
const ruler = document.getElementById('ruler');
const rectangle = document.getElementById('rectangle');
const circle = document.getElementById('circle');
const color = document.getElementById('strokeColor');

let canvas = document.getElementById('paintArea');
canvas.style.width ='100%';
canvas.style.height='100%';
canvas.width  = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
let c = canvas.getContext('2d');

let rectangleCordinates = [];

let strokeColor = "black";
let fillColor = "transparent";

let selectBrush = selectRuler = selectRect = selectCircle = false;

c.fillStyle = fillColor;
c.strokeStyle = strokeColor;

brush.addEventListener("click", function() {
    console.log("Brush is seleced.");
    document.getElementById('brush').style.color = 'blue';
    document.getElementById('ruler').style.color = 'black';
    document.getElementById('rectangle').style.color = 'black';
    document.getElementById('circle').style.color = 'black';
    selectBrush = true;
    selectRuler = selectRect = selectCircle = false;
})

ruler.addEventListener("click", function() {
    console.log("Ruler is selected.");
    document.getElementById('brush').style.color = 'black';
    document.getElementById('ruler').style.color = 'blue';
    document.getElementById('rectangle').style.color = 'black';
    document.getElementById('circle').style.color = 'black';
    selectRuler = true;
    selectBrush = selectRect = selectCircle = false;
})

rectangle.addEventListener("click", function() {
    console.log("Rectangle is selected.");
    document.getElementById('brush').style.color = 'black';
    document.getElementById('ruler').style.color = 'black';
    document.getElementById('rectangle').style.color = 'blue';
    document.getElementById('circle').style.color = 'black';
    selectRect = true;
    selectBrush = selectRuler = selectCircle = false;    
})

circle.addEventListener("click", function() {
    console.log("Circle is selected.");
    document.getElementById('brush').style.color = 'black';
    document.getElementById('ruler').style.color = 'black';
    document.getElementById('rectangle').style.color = 'black';
    document.getElementById('circle').style.color = 'blue';
    selectCircle = true;
    selectBrush = selectRuler = selectRect = false;
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
}
function getWidthAndHeight(event) {
    width = event.clientX - x;
    height = event.clientY - y;

    console.log("width: "+width+" Height: "+height);
    // console.log(x+" "+y+" "+width+" "+height)
    let shape = "none";
    if(selectRect) shape = "selectRect";
    else if(selectRuler) shape = "selectRuler";
    else if(selectCircle) shape = "selectCircle";
    else if(selectBrush) shape = "selectBrush";
    drawShape(shape, x, y, width, height);
}

function drawShape(shape, x, y, width, height) {
    console.log(shape+" function ");
    switch(shape) {
        case "selectBrush":
            drawBrush();
            break;
        case "selectRuler":
            drawRuler();
            break;
        case "selectRect":
            drwaRect(x, y, width, height);
            break;
        case "selectCircle":
            drawCircle(x, y, width, height);
            break;
        default:
            alert("select any tool");
            break;
        
    }
}
function drwaRect(dx, dy, width, height) {
    c.fillRect(dx, dy, width, height);
    c.strokeRect(dx, dy, width, height);
}
function drawBrush(dx, dy, width, height) {
    let radius = 5;
    c.beginPath();
    c.arc(x, y, radius, 0, 2 * Math.PI);
    c.stroke();
    c.close
}
function drawCircle(dx, dy, width, height) {
    let radius = width;
    c.beginPath();
    c.arc(x, y, radius, 0, 2 * Math.PI);
    c.stroke();
    c.closePath();    
}
function drawRuler() {

}


// c.fillRect(0, 0, 150, 100);
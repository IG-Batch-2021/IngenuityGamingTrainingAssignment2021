const clearAll = document.getElementById('clearCanvas');
const brush = document.getElementById('brush');
const ruler = document.getElementById('ruler');
const rectangle = document.getElementById('rectangle');
const circle = document.getElementById('circle');
const color = document.getElementById('strokeColor');
const main = document.getElementById('main');

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

clearAll.addEventListener("click", function() {
    console.log("canvas clean");
    c.clearRect(0, 0, canvas.width, canvas.height);
});

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
function showLiveCordinates(event) {
    let livePosition = ("( "+(event.clientX-62)+" , "+(event.clientY-10)+" )");
    document.getElementById('showLiveCursorPosition').innerHTML = livePosition;
}
let x = y = width = height = checkEndpoint = 0;

function getStartCordinates(event) {
    x = event.clientX - 62;
    y = event.clientY - 10;
    main.addEventListener("mousemove", showShape(event));
    // document.onmousemove = showShape(event);
    console.log("Start cordinates: "+x+" "+y);
}

function showShape(event) {
    // console.log("fig show: "+event.clientX+" "+event.clientY);
    let shape = "none";
    if(selectRect) shape = "selectRect";
    else if(selectRuler) shape = "selectRuler";
    else if(selectCircle) shape = "selectCircle";
    else if(selectBrush) shape = "selectBrush";
    drawShape(shape,x, y, event.clientX-x-62, event.clientY-y-10);
}
function getEndCordinates(event) {
    width = event.clientX - x - 62;
    height = event.clientY - y - 10;

    console.log("End cordinate: "+(width+x)+" "+(height+y))
    let shape = "none";
    if(selectRect) shape = "selectRect";
    else if(selectRuler) shape = "selectRuler";
    else if(selectCircle) shape = "selectCircle";
    else if(selectBrush) shape = "selectBrush";
    drawShape(shape, x, y, width, height);
}

function drawShape(shape, x, y, width, height) {
    // console.log(shape+" function ");
    switch(shape) {
        case "selectBrush":
            drawBrush(x, y, width, height);
            break;
        case "selectRuler":
            drawRuler(x, y, width, height);
            break;
        case "selectRect":
            drawRect(x, y, width, height);
            break;
        case "selectCircle":
            drawCircle(x, y, width, height);
            break;
        default:
            alert("select any tool");
            break;        
    }
}

function drawBrush(dx, dy, width, height) {
    let radius = 5;
    console.log("brush works");
    canvas.addEventListener("onmousemove", function() {
        c.beginPath();
        c.arc(x, y, radius, 0, 2 * Math.PI);
        c.stroke();
        c.closePath();
        console.log("brush draw sucessfully");
        console.log(dx+" "+dy+" "+width+" "+height);
    })
}

function drawRuler(x, y, width, heigth) {
    console.log(x+" "+y);
    c.lineWidth = 2;
    let x2 = width+x;
    let y2 = height+y;
    console.log("start")
    c.beginPath();
    c.moveTo(x, y);
    c.lineTo(x2, y2);
    c.stroke();
    c.closePath();
    console.log("end")
}

function drawRect(dx, dy, width, height) {
    dx -= 21;
    console.log("x: "+dx+" y: "+dy);
    console.log("width: "+width+" Height: "+height);
    c.fillRect(dx, dy, width, height);
    c.strokeRect(dx, dy, width, height);
}

function drawCircle(dx, dy, width, height) {
    let radius = findRadius(width, height);
    if(width == 0) radius = height;
    c.beginPath();
    c.arc(x, y, Math.abs(radius), 0, 2 * Math.PI);
    c.stroke();
    c.closePath(); 
    console.log("Radius: "+Math.abs(radius));
}

function findRadius(width, height) {
    let p = width * width;
    let b = height * height;
    let sum = p+b;
    let h = Math.sqrt(sum, 2);
    console.log(p+" "+b+" "+h);

    return h;
}

// c.fillRect(0, 0, 150, 100);
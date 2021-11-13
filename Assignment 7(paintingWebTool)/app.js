const clearAll = document.getElementById('clearCanvas');
const brush = document.getElementById('brush');
const eraser = document.getElementById('eraser');
const ruler = document.getElementById('ruler');
const rectangle = document.getElementById('rectangle');
const circle = document.getElementById('circle');
const color = document.getElementById('strokeColor');
const size = document.getElementById('selectSize');
const main = document.getElementById('main');

let canvas = document.getElementById('paintArea');
canvas.style.width ='100%';
canvas.style.height='100%';
canvas.width  = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
let c = canvas.getContext('2d');

let strokeColor = "black";
let fillColor = "transparent";

let selectBrush = selectEraser = selectRuler = selectRect = selectCircle = false;

c.fillStyle = fillColor;
c.strokeStyle = strokeColor;

clearAll.addEventListener("click", function() {
    console.log("canvas clean");
    c.clearRect(0, 0, canvas.width, canvas.height);
});

brush.addEventListener("click", function() {
    console.log("Brush is selected.");
    document.getElementById('brush').style.color = 'blue';
    document.getElementById('eraser').style.color = 'black';
    document.getElementById('ruler').style.color = 'black';
    document.getElementById('rectangle').style.color = 'black';
    document.getElementById('circle').style.color = 'black';
    selectBrush = true;
    selectRuler = selectEraser = selectRect = selectCircle = false;
})

eraser.addEventListener("click", function() {
    console.log("Eraser is selected");
    document.getElementById('brush').style.color = 'black';
    document.getElementById('eraser').style.color = 'blue';
    document.getElementById('ruler').style.color = 'black';
    document.getElementById('rectangle').style.color = 'black';
    document.getElementById('circle').style.color = 'black';
    selectEraser = true;
    selectBrush = selectRuler = selectRect = selectCircle = false;
});

ruler.addEventListener("click", function() {
    console.log("Ruler is selected.");
    document.getElementById('brush').style.color = 'black';
    document.getElementById('eraser').style.color = 'black';
    document.getElementById('ruler').style.color = 'blue';
    document.getElementById('rectangle').style.color = 'black';
    document.getElementById('circle').style.color = 'black';
    selectRuler = true;
    selectBrush = selectEraser = selectRect = selectCircle = false;
})

rectangle.addEventListener("click", function() {
    console.log("Rectangle is selected.");
    document.getElementById('brush').style.color = 'black';
    document.getElementById('eraser').style.color = 'black';
    document.getElementById('ruler').style.color = 'black';
    document.getElementById('rectangle').style.color = 'blue';
    document.getElementById('circle').style.color = 'black';
    selectRect = true;
    selectBrush = selectEraser = selectRuler = selectCircle = false;    
})

circle.addEventListener("click", function() {
    console.log("Circle is selected.");
    document.getElementById('brush').style.color = 'black';
    document.getElementById('eraser').style.color = 'black';
    document.getElementById('ruler').style.color = 'black';
    document.getElementById('rectangle').style.color = 'black';
    document.getElementById('circle').style.color = 'blue';
    selectCircle = true;
    selectBrush = selectEraser = selectRuler = selectRect = false;
})

color.addEventListener("input", function() {
    strokeColor = color.value;
    console.log(strokeColor);
    c.fillStyle = fillColor;
    c.strokeStyle = strokeColor;
    document.getElementById('showColorName').innerHTML = color.value;
})

size.addEventListener("input", function() {
    console.log(size.value);
    c.lineWidth = size.value;
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
    // console.log("Start cordinates: "+x+" "+y);
}

function showShape(event) {
    // console.log("fig show: "+event.clientX+" "+event.clientY);
    let shape = "none";
    if(selectRect) shape = "selectRect";
    else if(selectEraser) shape = "selectEraser";
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
    else if(selectEraser) shape = "selectEraser";
    else if(selectRuler) shape = "selectRuler";
    else if(selectCircle) shape = "selectCircle";
    else if(selectBrush) shape = "selectBrush";
    drawShape(shape, x, y, width, height);
}

function drawShape(shape, x, y, width, height) {
    console.log(shape+" function ");
    switch(shape) {
        case "selectBrush":
            drawBrush(x, y, width, height);
            break;
        case "selectEraser":
            drawEraser(x, y, width, height);
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
    console.log("brush works");
    let isDrawing = false;
    // canvas.onmousedown = function(e) {
        console.log("drawing started")
        isDrawing = true;
        c.beginPath();
        c.moveTo(dx, dy);
        // c.lineTo();
        // c.stroke();
        // c.closePath();
        // console.log("brush draw sucessfully");
        // console.log(dx+" "+dy+" "+width+" "+height);
    // };
    canvas.onmousemove = function(event) {
        if(isDrawing) {
            console.log("drawing")
            c.lineTo(event.clientX, event.clientY);
            c.stroke();
        }
    };
    // c.closePath();
    canvas.onmouseup = function(e) {
        isDrawing = false;
        c.closePath();
        console.log("draw completed")
    };

    // if (selectBrush) {
    //     let isDrawing = true;
    //     canvas.onmousedown = function(e) {
    //       isDrawing = true;
    //       c.moveTo(e.clientX, e.clientY);
    //     };
    //     canvas.onmousemove = function(e) {
    //       if (isDrawing) {
    //         c.lineTo(e.clientX, e.clientY);
    //         c.stroke();
    //       }
    //     };
    //     canvas.onmouseup = function(e) {
    //       isDrawing = false;
    //       console.log("isDrawing false")
    //     };
    // }
}

function drawEraser(dx, dy, width, height) {
    console.log("Eraser works");
    let isErasing = false;
    color.value = "#ffffff";
    strokeColor = color.value;
    // canvas.onmousedown = function(e) {
        console.log("Erase start")
        isErasing = true;
        c.beginPath();
        // c.moveTo(dx, dy);
        // c.lineTo();
        // c.stroke();
        // c.closePath();
        // console.log("brush draw sucessfully");
        // console.log(dx+" "+dy+" "+width+" "+height);
    // };
    let e2, e3;
    canvas.onmousemove = function(event) {
        if(isErasing) {
            console.log("Erasing")
            c.lineTo(event.clientX, event.clientY);
            c.stroke();
            // e2 = event.clientX;
            // e3 = event.clientY;
        }
    };
    // c.closePath();
    canvas.onmouseup = function(e) {
        isErasing = false;
        c.closePath();
        // c.clearRect(dx, dy, e2, e3);
        console.log("Erase completed")
        // color.value = "#000000";
        // strokeColor = color.value;
    };
    strokeColor = color.value;

    // if (selectBrush) {
    //     let isDrawing = true;
    //     canvas.onmousedown = function(e) {
    //       isDrawing = true;
    //       c.moveTo(e.clientX, e.clientY);
    //     };
    //     canvas.onmousemove = function(e) {
    //       if (isDrawing) {
    //         c.lineTo(e.clientX, e.clientY);
    //         c.stroke();
    //       }
    //     };
    //     canvas.onmouseup = function(e) {
    //       isDrawing = false;
    //       console.log("isDrawing false")
    //     };
    // }
}

function drawRuler(x, y, width, heigth) {
    console.log(x+" "+y);
    c.lineWidth = 5;
    let x2 = width+x;
    let y2 = height+y;
    console.log("start");
    c.beginPath();
    c.moveTo(x, y);
    c.lineTo(x2, y2);
    c.stroke();
    c.closePath();
    console.log("end");
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
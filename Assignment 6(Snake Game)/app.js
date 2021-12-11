const canvas = document.getElementById('canvas');
canvas.width = 600;
canvas.height = 600;
const ctx=canvas.getContext("2d");

const snakeColor = "lime";
const boardColor = "darkblue";

var snakeX = snakeY = 5; //snake starting position
var gridSize = 20;
var tileCount = 30;
var foodX = foodY = 29; //food staring position
var xVel = yVel = 0;
var trail = [];
var tail = 5;

window.onload=function() {
    document.addEventListener("keydown", keyPush);
    setInterval(game,1000/15);
}

const game = () => {
    snakeX += xVel;
    snakeY += yVel;

    if(snakeX < 0 ) {
        snakeX = tileCount-1;
    }

    if(snakeX > tileCount-1 ) {
        snakeX = 0;
    }
    if(snakeY < 0 ) {
        snakeY = tileCount-1;
    }
    if(snakeY > tileCount-1 ) {
        snakeY=0;
    }

    ctx.fillStyle = boardColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = snakeColor;

    for(let i=0; i<trail.length; i++) {
        ctx.fillRect(trail[i].x*gridSize, trail[i].y*gridSize, gridSize-2, gridSize-2)
        if(trail[i].x == snakeX && trail[i].y == snakeY) {
        tail = 5;
        }
    }

    trail.push({x:snakeX, y:snakeY});
    while(trail.length > tail) {
        trail.shift();
    }

    if(foodX == snakeX && foodY == snakeY) {
        tail++;
        foodX = Math.floor((Math.random() * tileCount));
        foodY = Math.floor((Math.random() * tileCount));
    }

    ctx.fillStyle = 'yellow'; //food color
    ctx.fillRect(foodX*gridSize, foodY*gridSize, gridSize-2, gridSize-2);
}

keyPush = (e) => {
    switch(e.keyCode) {
        case 37:
            xVel = -1;
            yVel = 0;
            break;
        case 38:
            xVel = 0;
            yVel = -1;
            break;
        case 39:
            xVel = 1;
            yVel = 0;
            break;
        case 40:
            xVel = 0;
            yVel = 1;
            break;
        }
}
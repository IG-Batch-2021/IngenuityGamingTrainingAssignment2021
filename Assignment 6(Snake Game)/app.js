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
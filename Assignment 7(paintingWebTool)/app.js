const brush = document.getElementById('brush');
const ruler = document.getElementById('ruler');
const rectangle = document.getElementById('rectangle');
const circle = document.getElementById('circle');
const color = document.getElementById('selectColor');

const canvas = document.getElementById('paintArea');

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
    console.log(document.getElementById('selectColor').value);
})
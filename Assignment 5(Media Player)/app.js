const songsData = [
    {
        "name" : "Alone pt2",
        "img-src" : "alone2.jpg",
        "song-src" : "songs/alone2.mp3"
    },
    {
        "name" : "Built a bitch",
        "img-src" : "builtABitch.png",
        "song-src" : "songs/builtABitch.mp3"
    },
    {
        "name" : "Dance Monkey",
        "img-src" : "danceMonkey.jpg",
        "song-src" : "songs/danceMonkey.mp3"
    },
    {
        "name" : "Perfect",
        "img-src" : "perfect.jpg",
        "song-src" : "songs/perfect.mp3"
    },
    {
        "name" : "Phao 2",
        "img-src" : "phao2.jpg",
        "song-src" : "songs/phao2.mp3"
    }
]

var songName = document.getElementById('songName');
var loop = document.getElementById('loop');
var img = document.getElementById('img');
var prev = document.getElementById('prev');
var play = document.getElementById('play');
var next = document.getElementById('next');

var index = 0;
var song;
song = new Audio(songsData[index]["song-src"]);
songName.innerText = songsData[index]["name"];
img.src =   `img/${songsData[index]["img-src"]}`;
song.play();
// song.autoplay = "on";
var checkPlayAndPause = false;
var checkLoop = false;

// console.log(songsData)
window.onload = () => {
    if(index == 0 && checkLoop == false) {
        prev.style.pointerEvents = "none";
    }
}

next.addEventListener("click", function() {
    song.pause();
    song.currentTime = 0;
    if(index == songsData.length-1 && checkLoop == false) {
        next.style.pointerEvents = "none";
    }
    prev.style.pointerEvents = "all";
    if(index > songsData.length-1) index = 0;
    songName.innerText = songsData[index]["name"];
    img.src = `img/${songsData[index]["img-src"]}`;
    song = new Audio(songsData[index]["song-src"]);
    song.play();
    index++;
    console.log(index+" in next")
})
prev.addEventListener("click", function() {
    if(index == 0 && checkLoop == false) {
        prev.style.pointerEvents = "none";
    }
    song.pause();
    index--;
    next.style.pointerEvents = "all";
    if(index < 0) index = songsData.length-1;
    songName.innerText = songsData[index]["name"];
    img.src = `img/${songsData[index]["img-src"]}`;
    song = new Audio(songsData[index]["song-src"]);
    song.play();
    console.log(index+" in prev")
})
console.log(checkPlayAndPause)
play.addEventListener("click", function() {
    if(checkPlayAndPause) {
        song.pause();
        checkPlayAndPause = false;
    } else {
        song.play();
        checkPlayAndPause = true;
    }
    console.log(checkPlayAndPause)
})
loop.addEventListener("click", function() {
    if(checkLoop) {
        checkLoop = false;
    } else {
        checkLoop = true;
    }
})


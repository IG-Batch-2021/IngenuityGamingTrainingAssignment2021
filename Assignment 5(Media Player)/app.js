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
var img = document.getElementById('img');
var timeSlot = document.getElementById('time');
var loop = document.getElementById('loop');
var prev = document.getElementById('prev');
var play = document.getElementById('play');
var pause = document.getElementById('pause');
var next = document.getElementById('next');
var volFull = document.getElementById('vol-full');
var volMute = document.getElementById('vol-mute');

var index = 0;
var song;

song = new Audio(songsData[index]["song-src"]);
songName.innerText = songsData[index]["name"];
img.src = `img/${songsData[index]["img-src"]}`;
// song.play();

var songPlay = false;
var checkLoop = false;

// console.log(songsData)
window.onload = () => {
    if(index == 0 && checkLoop == false) {
        prev.style.pointerEvents = "none";
        prev.style.opacity = "0.5";
        pause.style.display = "none"
        volMute.style.display = "none";
        volFull.style.display = "block"
    }
}

next.addEventListener("click", function() {
    index++;
    if(songPlay) {song.pause();} else { play.style.display = "none"; pause.style.display = "block"; songPlay = true; }
    
    if(index == songsData.length-1 && checkLoop == false) {
        next.style.pointerEvents = "none";
        next.style.opacity = "0.5"
    }
    prev.style.pointerEvents = "all";
    prev.style.opacity = "1";
    if(index > songsData.length-1) index = 0;
    songName.innerText = songsData[index]["name"];
    img.src = `img/${songsData[index]["img-src"]}`;
    song = new Audio(songsData[index]["song-src"]);
    song.play();
    console.log(index+" in next")
})

prev.addEventListener("click", function() {
    index--;
    if(index == 0 && checkLoop == false) {
        prev.style.pointerEvents = "none";
        prev.style.opacity = "0.5"
    }
    song.pause();
    next.style.opacity = "1";
    next.style.pointerEvents = "all";
    if(index < 0) index = songsData.length-1;
    songName.innerText = songsData[index]["name"];
    img.src = `img/${songsData[index]["img-src"]}`;
    song = new Audio(songsData[index]["song-src"]);
    song.play();
    console.log(index+" in prev")
})

play.addEventListener("click", function() {
    play.style.display = "none"
    pause.style.display = "block"
    song.play();
    songPlay = true;
    console.log("song play")
    console.log(songPlay)
})

pause.addEventListener("click", function() {
    pause.style.display = "none"
    play.style.display = "block"
    song.pause();
    songPlay = false;
    console.log("song pause")
    console.log(songPlay)
})

loop.addEventListener("click", function() {
    if(checkLoop) {
        checkLoop = false;
        loop.style.color = "white";
    } else {
        checkLoop = true;
        loop.style.color = "rgb(122, 222, 255)";
    }
})

volFull.addEventListener("click", function() {
    console.log("volFull is press")
    volMute.style.display = "block";
    volFull.style.display = "none";
    song.volume = 0.0;
});

volMute.addEventListener("click", function() {
    console.log("volMute is press");
    volMute.style.display = "none";
    volFull.style.display = "block";
    song.volume = 1.0;
});
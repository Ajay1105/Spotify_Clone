document.querySelector("h1").innerHTML = "Welcome to cloned spotify";
let audioElement = new Audio("songs/1.mp3");
let masterClass = document.querySelector(".play");
let gif = document.querySelector("#gif");
let progressBar = document.querySelector("#myProgressBar");
let songItems = Array.from(document.querySelectorAll(".songItems"));

let songs = [
    { songName: "song1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "song2", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "song3", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "song4", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "song5", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "song6", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "song7", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "song8", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
]

songItems.forEach((element, i) => {
    console.log(element, i);
    element.querySelector("img").src = songs[i].coverPath;
    element.querySelector(".songName").innerHTML = songs[i].songName;
})

masterClass.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime == 0) {
        audioElement.play();
        masterClass.classList.remove("fa-play-circle");
        masterClass.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterClass.classList.remove("fa-pause-circle");
        masterClass.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener("timeupdate", () => {
    progress = parseInt(audioElement.currentTime / audioElement.duration * 100);
    progressBar.value = progress;
})
progressBar.addEventListener("change", () => {
    audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
})

setInterval(() => {
    const d = new Date();
    document.querySelector(".time").innerHTML = `Time ${d}`;
}, 1000);
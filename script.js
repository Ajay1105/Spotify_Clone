document.querySelector("h1").innerHTML = "Welcome to cloned spotify";
let audioElement = new Audio("songs/1.mp3");
let masterClass = document.querySelector(".play");
let gif = document.querySelector("#gif");
let progressBar = document.querySelector("#myProgressBar");

masterClass.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime == 0){
    audioElement.play();
    masterClass.classList.remove("fa-play-circle");
    masterClass.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
    masterClass.classList.remove("fa-pause-circle");
    masterClass.classList.add("fa-play-circle");
    gif.style.opacity = 0;
    }
})

audioElement.addEventListener("timeupdate", ()=>{
    progress = parseInt(audioElement.currentTime/audioElement.duration * 100);
    progressBar.value = progress;
})
progressBar.addEventListener("change",()=>{
    audioElement.currentTime = (progressBar.value * audioElement.duration) /100;
})

setInterval( () => {
    const d = new Date();
document.querySelector(".time").innerHTML=`Time ${d}`;
},1000);
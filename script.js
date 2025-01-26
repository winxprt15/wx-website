function PlayPause() {
if (document.querySelector(".audio").paused) {
document.querySelector("audio").play();
document.querySelector(".play-pause-btn").src = 'pause-xxl.png'
document.querySelector(".play-pause-btn").style = "position: fixed; margin-top: 38vh; margin-left: 89vw; animation: fade-in-out 2.5s linear infinite;";
document.querySelector(".stop-btn").style = "position: fixed; margin-top: 50.5vh; margin-left: 89vw; animation: fade-in-out 2.5s linear infinite;";
} else {
document.querySelector("audio").pause();
document.querySelector(".play-pause-btn").src = 'play-xxl.png'
document.querySelector(".play-pause-btn").style = "position: fixed; margin-top: 38vh; margin-left: 89vw;";
document.querySelector(".stop-btn").style = "position: fixed; margin-top: 50.5vh; margin-left: 89vw;"
}
}
function StopAudio() {
document.querySelector("audio").pause();
document.querySelector("audio").currentTime = 0;
document.querySelector(".play-pause-btn").src = 'play-xxl.png'
document.querySelector(".play-pause-btn").style = "position: fixed; margin-top: 38vh; margin-left: 89vw;";
document.querySelector(".stop-btn").style = "position: fixed; margin-top: 50.5vh; margin-left: 89vw;"
}

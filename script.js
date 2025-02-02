function PlayPause() {
if (document.querySelector(".audio").paused) {
document.querySelector(".audio").play();
} else {
document.querySelector(".audio").pause();
}
}
function StopAudio() {
document.querySelector(".audio").pause();
document.querySelector(".audio").currentTime = 0;
}
function BlueTheme() {
document.body.style = "background: linear-gradient(90deg, rgb(0, 15, 80), rgb(0, 55, 100));";
document.querySelector(".side-div-div").style = "border-radius: 0px 0px 20px 50px; padding: 2px; background: linear-gradient(75deg, blue, rgba(0, 40, 175, 0.7));";
document.querySelector(".hr1").style = "border-color: lime;";
document.querySelector(".hr2").style = "border-color: lightblue;";
document.querySelector(".hr3").style = "border-color: lime;";
document.querySelector("fieldset").style = "border-radius: 25px; border-color: blue; width: 95%;";
localStorage.setItem('themeforwxsite', 'blue');
document.getElementById('sett1').checked = true;
}
function GreenTheme() {
document.body.style = "background: linear-gradient(90deg, rgb(0, 80, 15), rgb(0, 100, 55));";
document.querySelector(".side-div-div").style = "border-radius: 0px 0px 20px 50px; padding: 2px; background: linear-gradient(75deg, green, rgba(0, 175, 40, 0.7));";
document.querySelector(".hr1").style = "border-color: lightblue;";
document.querySelector(".hr2").style = "border-color: lime;";
document.querySelector(".hr3").style = "border-color: lightblue;";
document.querySelector("fieldset").style = "border-radius: 25px; border-color: green; width: 95%;"
localStorage.setItem('themeforwxsite', 'green');
document.getElementById('sett2').checked = true;
}
if (localStorage.getItem('themeforwxsite') == 'green') {
document.body.style = "background: linear-gradient(90deg, rgb(0, 80, 15), rgb(0, 100, 55));";
document.querySelector(".side-div-div").style = "border-radius: 0px 0px 20px 50px; padding: 2px; background: linear-gradient(75deg, green, rgba(0, 175, 40, 0.7));";
document.querySelector(".hr1").style = "border-color: lightblue;";
document.querySelector(".hr2").style = "border-color: lime;";
document.querySelector("fieldset").style = "border-radius: 25px; border-color: green; width: 95%;"
localStorage.setItem('themeforwxsite', 'green');
document.getElementById('sett2').checked = true;
} else {
document.body.style = "background: linear-gradient(90deg, rgb(0, 15, 80), rgb(0, 55, 100));";
document.querySelector(".side-div-div").style = "border-radius: 0px 0px 20px 50px; padding: 2px; background: linear-gradient(75deg, blue, rgba(0, 40, 175, 0.7));";
document.querySelector(".hr1").style = "border-color: lime;";
document.querySelector(".hr2").style = "border-color: lightblue;";
document.querySelector("fieldset").style = "border-radius: 25px; border-color: blue; width: 95%;";
document.getElementById('sett1').checked = true;
}
function IdiotQuiz() {
let IdiotTest = window.prompt(`Idiot Test!! \nType below the answer of the following question: \nIf X=3 and Y=1 then solve this: 2x+3y=??`);
if (IdiotTest == 9) {
window.alert('Okay! You are good to go');
} else if (IdiotTest == null) {

} else if (IdiotTest == '') {
window.alert("I'll skip that and go ahead")
} else {
document.write(`
<center>
<span style="font-family: Arial; font-size: 40px; font-weight: 760;">Access denied on this page. Message: We do not accept idiots</span>
</center>
`)
}
}
document.querySelector(".audio").onplay = function() {
document.querySelector(".play-pause-btn").src = 'pause-xxl.png'
document.querySelector(".play-pause-btn").style = "cursor: pointer; display: block; animation: fade-in-out 2.5s linear infinite;";
document.querySelector(".play-pause-btn").title = "Pause music";
document.querySelector(".stop-btn").style = "cursor: pointer; margin-top: 10px; display: block; animation: fade-in-out 2.5s linear infinite;";
document.querySelector(".next-track").style = "cursor: pointer; animation: fade-in-out 2.5s linear infinite;";
document.querySelector(".prev-track").style = "transform: scaleX(-1); cursor: pointer; animation: fade-in-out 2.5s linear infinite;";
};
document.querySelector(".audio").onpause = function () {
document.querySelector(".play-pause-btn").src = 'play-xxl.png'
document.querySelector(".play-pause-btn").style = "display: block;";
document.querySelector(".play-pause-btn").title = "Play music";
document.querySelector(".stop-btn").style = "cursor: pointer; margin-top: 10px; display: block;"
document.querySelector(".next-track").style = "cursor: pointer;";
document.querySelector(".prev-track").style = "transform: scaleX(-1); cursor: pointer;";
};
var CurrentSong;
const SongArray = ["Coldplay - The Scientist", "Coldplay - In My Place", "Coldplay - Yellow", "Green Day - Boulevard of Broken Dreams", "Green Day - When I Come Around", "Green Day - Good Riddance", "blink-182 - Adam's Song", "blink-182 - I Miss You", "blink-182 - Story Of A Lonely Guy"];
function ShuffleSong() {
CurrentSongNum = Math.round(Math.random() * 8);
document.querySelector(".audio").src = SongArray[CurrentSongNum] + ".mp3";
document.querySelector(".music-info").innerHTML = `
<span>♫&nbsp;</span> 
<span><b>${SongArray[CurrentSongNum].split(" - ")[0]}</b></span>
<hr style="margin: 0;">
<span>${SongArray[CurrentSongNum].split(" - ")[1]}</span>
`;
}
ShuffleSong();
function TrackChange(value) {
if (value == 1) {
if (CurrentSongNum == 8) {
CurrentSongNum = 0;
document.querySelector(".audio").src = SongArray[CurrentSongNum] + ".mp3";
document.querySelector(".audio").play();
document.querySelector(".music-info").innerHTML = `
<span>♫&nbsp;</span> 
<span><b>${SongArray[CurrentSongNum].split(" - ")[0]}</b></span>
<hr style="margin: 0;">
<span>${SongArray[CurrentSongNum].split(" - ")[1]}</span>
`;
return;
}
CurrentSongNum += 1;
document.querySelector(".audio").src = SongArray[CurrentSongNum] + ".mp3";
document.querySelector(".audio").play();
document.querySelector(".music-info").innerHTML = `
<span>♫&nbsp;</span> 
<span><b>${SongArray[CurrentSongNum].split(" - ")[0]}</b></span>
<hr style="margin: 0;">
<span>${SongArray[CurrentSongNum].split(" - ")[1]}</span>
`;
} else if (value == -1) {
if (CurrentSongNum == 0) {
CurrentSongNum = 8;
document.querySelector(".audio").src = SongArray[CurrentSongNum] + ".mp3";
document.querySelector(".audio").play();
document.querySelector(".music-info").innerHTML = `
<span>♫&nbsp;</span> 
<span><b>${SongArray[CurrentSongNum].split(" - ")[0]}</b></span>
<hr style="margin: 0;">
<span>${SongArray[CurrentSongNum].split(" - ")[1]}</span>
`;
return;
}
CurrentSongNum -= 1;
document.querySelector(".audio").src = SongArray[CurrentSongNum] + ".mp3";
document.querySelector(".audio").play();
document.querySelector(".music-info").innerHTML = `
<span>♫&nbsp;</span> 
<span><b>${SongArray[CurrentSongNum].split(" - ")[0]}</b></span>
<hr style="margin: 0;">
<span>${SongArray[CurrentSongNum].split(" - ")[1]}</span>
`;
}
}
document.querySelector(".audio-sfx").volume = 0.6;
var MouseOutMeme = 0;
var PausedMusic;
document.body.addEventListener("mouseenter", function() {
document.querySelector(".mouse-leave-mess").style = "z-index: 15; position: fixed; display: none; padding: 10px; margin-top: 25px; background-color: rgba(100, 100, 100, 0.75); margin-top: 25vh; margin-right: 26vw;"
document.querySelector(".input-mouse-leave").value = null;
document.querySelector(".audio-sfx").pause();
if (PausedMusic == 1) {
if (document.querySelector(".audio").paused) {document.querySelector(".audio").play(); PausedMusic = null;}
}
});
document.body.addEventListener("mouseleave", function() {
if (MouseOutMeme < 2) {
document.querySelector(".mouse-leave-mess").style = "z-index: 15; animation: bigger-inputfield 7s linear; transform: scale(600%); position: fixed; display: inline-block; padding: 10px; margin-top: 25px; background-color: rgba(100, 100, 100, 0.75); margin-top: 25vh; margin-right: 26vw;"
document.querySelector(".audio-sfx").src="long-brain-fart.mp3";
if (!document.querySelector(".audio").paused) {document.querySelector(".audio").pause(); PausedMusic = 1;}
document.querySelector(".audio-sfx").play();
MouseOutMeme++;
}
});
document.querySelector(".input-mouse-leave").addEventListener("keydown", function() {
if (event.key == 'Enter') {
document.querySelector(".mouse-leave-mess").style = "z-index: 15; transform: scale(150%); position: fixed; display: inline-block; padding: 10px; margin-top: 25px; background-color: rgba(100, 100, 100, 0.75); margin-top: 25vh; margin-right: 26vw;"
document.querySelector(".mouse-leave-mess").innerHTML = `<span style="font-size: 30pt;">Submitted succesfully! Now you may leave the fuck out</span>`;
setTimeout(`window.location.href = "https://google.com"`, 1750);
}
});

//ONLY ON INDEX.HTML. CODE ABOVE
function YtIframeCookies(value) {
if (value == '0') {
document.querySelector('.iframe1').src="https://www.youtube-nocookie.com/embed/07kkCVbjY7E?hl=en-us&amp;rel=0&amp;color=white&amp;disablekb=1&amp;mute=1&amp;autoplay=0";
document.querySelector('.iframe2').src="https://www.youtube-nocookie.com/embed/SFmRsIMJ0aE?hl=en-us&amp;rel=0&amp;color=white&amp;disablekb=1&amp;mute=1&amp;autoplay=0";
document.querySelector('.iframe3').src="https://www.youtube-nocookie.com/embed/pAoysWh-PNY?hl=en-us&amp;rel=0&amp;color=white&amp;disablekb=1&amp;mute=1&amp;autoplay=0";
localStorage.setItem('ytcookiesforwxsite', '0');
} else if (value == '1') {
document.querySelector('.iframe1').src="https://www.youtube.com/embed/07kkCVbjY7E?hl=en-us&amp;rel=0&amp;color=white&amp;disablekb=1&amp;mute=1&amp;autoplay=0";
document.querySelector('.iframe2').src="https://www.youtube.com/embed/SFmRsIMJ0aE?hl=en-us&amp;rel=0&amp;color=white&amp;disablekb=1&amp;mute=1&amp;autoplay=0";
document.querySelector('.iframe3').src="https://www.youtube.com/embed/pAoysWh-PNY?hl=en-us&amp;rel=0&amp;color=white&amp;disablekb=1&amp;mute=1&amp;autoplay=0";
localStorage.setItem('ytcookiesforwxsite', '1');
}
}
YtIframeCookies(localStorage.getItem('ytcookiesforwxsite'));
if (localStorage.getItem('ytcookiesforwxsite') == '0') {
document.getElementById('sett4').checked = true;
} else {
document.getElementById('sett3').checked = true;
}

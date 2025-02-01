function PlayPause() {
if (document.querySelector(".audio").paused) {
document.querySelector("audio").play();
document.querySelector(".play-pause-btn").src = 'pause-xxl.png'
document.querySelector(".play-pause-btn").style = "z-index: 15; position: fixed; margin-top: 38vh; margin-left: 89vw; animation: fade-in-out 2.5s linear infinite;";
document.querySelector(".play-pause-btn").title = "Pause music";
document.querySelector(".stop-btn").style = "position: fixed; margin-top: 50.5vh; margin-left: 89vw; animation: fade-in-out 2.5s linear infinite;";
} else {
document.querySelector("audio").pause();
document.querySelector(".play-pause-btn").src = 'play-xxl.png'
document.querySelector(".play-pause-btn").style = "z-index: 15; position: fixed; margin-top: 38vh; margin-left: 89vw;";
document.querySelector(".play-pause-btn").title = "Play music";
document.querySelector(".stop-btn").style = "position: fixed; margin-top: 50.5vh; margin-left: 89vw;"
}
}
function StopAudio() {
document.querySelector("audio").pause();
document.querySelector("audio").currentTime = 0;
document.querySelector(".play-pause-btn").src = 'play-xxl.png'
document.querySelector(".play-pause-btn").style = "z-index: 15; position: fixed; margin-top: 38vh; margin-left: 89vw;";
document.querySelector(".stop-btn").style = "position: fixed; margin-top: 50.5vh; margin-left: 89vw;"
}
function BlueTheme() {
document.body.style = "background: linear-gradient(90deg, rgb(0, 15, 80), rgb(0, 55, 100));";
document.querySelector(".side-div-div").style = "border-radius: 0px 0px 20px 50px; padding: 2px; background: linear-gradient(75deg, blue, rgba(0, 40, 175, 0.7));";
document.querySelector(".hr1").style = "border-color: lime;";
document.querySelector(".hr2").style = "border-color: lightblue;";
document.querySelector("fieldset").style = "border-radius: 25px; border-color: blue; width: 95%;";
localStorage.setItem('themeforwxsite', 'blue');
document.getElementById('sett1').checked = true;
}
function GreenTheme() {
document.body.style = "background: linear-gradient(90deg, rgb(0, 80, 15), rgb(0, 100, 55));";
document.querySelector(".side-div-div").style = "border-radius: 0px 0px 20px 50px; padding: 2px; background: linear-gradient(75deg, green, rgba(0, 175, 40, 0.7));";
document.querySelector(".hr1").style = "border-color: lightblue;";
document.querySelector(".hr2").style = "border-color: lime;";
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
document.querySelector("audio").onplay = function() {
document.querySelector(".play-pause-btn").src = 'pause-xxl.png'
document.querySelector(".play-pause-btn").style = "z-index: 15; position: fixed; margin-top: 38vh; margin-left: 89vw; animation: fade-in-out 2.5s linear infinite;";
document.querySelector(".play-pause-btn").title = "Pause music";
document.querySelector(".stop-btn").style = "position: fixed; margin-top: 50.5vh; margin-left: 89vw; animation: fade-in-out 2.5s linear infinite;";
document.querySelector(".next-track").style = "margin-left: 15px; display: inline-block; position: fixed; margin-top: 50vh; cursor: pointer; animation: fade-in-out 2.5s linear infinite;";
document.querySelector(".prev-track").style = "transform: scaleX(-1); margin-left: 15px; display: inline-block; position: fixed; margin-top: 62vh; cursor: pointer; animation: fade-in-out 2.5s linear infinite;";
};
document.querySelector("audio").onpause = function () {
document.querySelector(".play-pause-btn").src = 'play-xxl.png'
document.querySelector(".play-pause-btn").style = "z-index: 15; position: fixed; margin-top: 38vh; margin-left: 89vw;";
document.querySelector(".play-pause-btn").title = "Play music";
document.querySelector(".stop-btn").style = "position: fixed; margin-top: 50.5vh; margin-left: 89vw;"
document.querySelector(".next-track").style = "margin-left: 15px; display: inline-block; position: fixed; margin-top: 50vh; cursor: pointer;";
document.querySelector(".prev-track").style = "transform: scaleX(-1); margin-left: 15px; display: inline-block; position: fixed; margin-top: 62vh; cursor: pointer;";
};
var CurrentSong;
const SongArray = ["Coldplay - The Scientist", "Coldplay - In My Place", "Coldplay - Yellow", "Green Day - Boulevard of Broken Dreams", "Green Day - When I Come Around", "Green Day - Good Riddance", "blink-182 - Adam's Song", "blink-182 - I Miss You", "blink-182 - Story Of A Lonely Guy"];
function ShuffleSong() {
CurrentSongNum = Math.round(Math.random() * 8);
document.querySelector(".audio").src = SongArray[CurrentSongNum] + ".mp3";
document.querySelector(".music-info").innerHTML = `
<span>♫:</span> 
<span>${SongArray[CurrentSongNum].split(" - ")[0]}</span>
<hr style="margin: 0;">
<span>${SongArray[CurrentSongNum].split(" - ")[1]}</span>
`;
}
ShuffleSong();
function TrackChange(value) {
if (value == 1) {
if (CurrentSongNum == 8) {
CurrentSongNum = 0;
document.querySelector("audio").src = SongArray[CurrentSongNum] + ".mp3";
document.querySelector("audio").play();
document.querySelector(".music-info").innerHTML = `
<span>♫:</span> 
<span>${SongArray[CurrentSongNum].split(" - ")[0]}</span>
<hr style="margin: 0;">
<span>${SongArray[CurrentSongNum].split(" - ")[1]}</span>
`;
return;
}
CurrentSongNum += 1;
document.querySelector("audio").src = SongArray[CurrentSongNum] + ".mp3";
document.querySelector("audio").play();
document.querySelector(".music-info").innerHTML = `
<span>♫:</span> 
<span>${SongArray[CurrentSongNum].split(" - ")[0]}</span>
<hr style="margin: 0;">
<span>${SongArray[CurrentSongNum].split(" - ")[1]}</span>
`;
} else if (value == -1) {
if (CurrentSongNum == 0) {
CurrentSongNum = 8;
document.querySelector("audio").src = SongArray[CurrentSongNum] + ".mp3";
document.querySelector("audio").play();
document.querySelector(".music-info").innerHTML = `
<span>♫:</span> 
<span>${SongArray[CurrentSongNum].split(" - ")[0]}</span>
<hr style="margin: 0;">
<span>${SongArray[CurrentSongNum].split(" - ")[1]}</span>
`;
return;
}
CurrentSongNum -= 1;
document.querySelector("audio").src = SongArray[CurrentSongNum] + ".mp3";
document.querySelector("audio").play();
document.querySelector(".music-info").innerHTML = `
<span>♫:</span> 
<span>${SongArray[CurrentSongNum].split(" - ")[0]}</span>
<hr style="margin: 0;">
<span>${SongArray[CurrentSongNum].split(" - ")[1]}</span>
`;
}
}

//ONLY ON INDEX.HTML. CODE ABOVE
function YtIframeCookies(value) {
if (value == '0') {
document.querySelector('.iframe1').src="https://www.youtube-nocookie.com/embed/07kkCVbjY7E?hl=en-us&amp;rel=0&amp;mute=1&amp;autoplay=0&amp;color=white&amp;disablekb=1";
document.querySelector('.iframe2').src="https://www.youtube-nocookie.com/embed/SFmRsIMJ0aE?hl=en-us&amp;rel=0&amp;color=white&amp;disablekb=1&amp;mute=1&amp;autoplay=0";
localStorage.setItem('ytcookiesforwxsite', '0');
} else if (value == '1') {
document.querySelector('.iframe1').src="https://www.youtube.com/embed/07kkCVbjY7E?hl=en-us&amp;rel=0&amp;mute=1&amp;autoplay=0&amp;color=white&amp;disablekb=1";
document.querySelector('.iframe2').src="https://www.youtube.com/embed/SFmRsIMJ0aE?hl=en-us&amp;rel=0&amp;color=white&amp;disablekb=1&amp;mute=1&amp;autoplay=0";
localStorage.setItem('ytcookiesforwxsite', '1');
}
}
YtIframeCookies(localStorage.getItem('ytcookiesforwxsite'));
if (localStorage.getItem('ytcookiesforwxsite') == '0') {
document.getElementById('sett4').checked = true;
} else {
document.getElementById('sett3').checked = true;
}

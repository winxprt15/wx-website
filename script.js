if (localStorage.getItem('idiottestfailedforwxsite') == '1') {
document.addEventListener('contextmenu', function() {
var MessArray = ["Another smart guy...", "You maybe probably fucking couldn't do that", "You thought so...", "You may use a browser extension for that. What?. You need help?? NO I WON'T HELP YOU.", "Hey hey stop right there.", "'Aim on missions not on cheats'"];
window.alert(MessArray[Math.round(Math.random() * 5)])
});
document.addEventListener('contextmenu', event => event.preventDefault());
document.body.innerHTML = `\n<center style="font-family: Arial;">\n<span style="font-size: 40px; font-weight: 760;">Access denied on this page.<br>Message: We do not accept idiots</span>\n<p style="font-size: 20pt; font-weight: 450;">To ensure you are actually smart, try to find where the secret unlock button is</p>\n<button style="position: absolute; top: ${Math.round(Math.random() * 40 + 30)}vh; right: ${Math.round(Math.random() * 90)}vw; transform: scale(200%); opacity: 0.075; background: transparent; color: rgb(0, 0, 75);" onclick="localStorage.removeItem('idiottestfailedforwxsite'); window.location.href = window.location.href;">UNLOCK</button>\n</div>\n</center>\n`;
}
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
if (localStorage.getItem("trollsettforwxsite") == '1') {
var IdiotTest = window.prompt(`Idiot Test!! \nType below the answer of the following question: \nIf X=3 and Y=1 then solve this: 2x+3y=??`);
if (IdiotTest == 9) {
window.alert('Okay! You are good to go');
} else if (IdiotTest == null) {
document.querySelector(".header").innerHTML = `<h1 style="vertical-align: top; margin-top: 0; margin-bottom: 0; color: lime; display: inline-block;">WinXprt</h1><h2 style="vertical-align: bottom; margin: 0; color: darkblue; display: inline-block;">'s page</h2>&nbsp;<span style="color: darkblue; font-size: 14pt; font-weight: 900; display: inline-block; vertical-align: bottom;">(At least you chose wisely)</span>`;
setTimeout(`document.querySelector(".header").innerHTML = \`\n<h1 style="vertical-align: top; margin-top: 0; margin-bottom: 0; color: lime; display: inline-block;">WinXprt</h1><h2 style="vertical-align: bottom; margin: 0; color: darkblue; display: inline-block;">'s page</h2>\n\``, 5000);
} else {
localStorage.setItem('idiottestfailedforwxsite', '1');
window.location.href = window.location.href;
}
} else {
window.alert("You're already here!")
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
function TrollSett(value, skip) {
if (skip == 0) {localStorage.setItem("trollsettforwxsite", `${value}`);}
if (localStorage.getItem("trollsettforwxsite") == '0') {document.getElementById("sett6").checked = true;}
if (localStorage.getItem("trollsettforwxsite") == '1') {document.getElementById("sett5").checked = true;}
}
document.querySelector(".audio-sfx").volume = 0.6;
var MouseOutMeme = 0;
var PausedMusic;
if ((localStorage.getItem("trollsettforwxsite") == '1') || (TrollSettValue == 1)) {
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
}
TrollSett(null, 1);

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

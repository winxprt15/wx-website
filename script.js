if (localStorage.getItem('idiottestfailedforwxsite') == '1') {
const ChancesOfIdiotTestFail = Math.round(Math.random() * 2);
if (ChancesOfIdiotTestFail == 0) {
document.addEventListener('contextmenu', function() {
var MessArray = ["Another smart guy...", "You maybe probably fucking couldn't do that", "You thought so...", "You may use a browser extension for that. What?. You need help?? NO I WON'T HELP YOU.", "Hey hey stop right there.", "'Aim on missions not on cheats'"];
window.alert(MessArray[Math.round(Math.random() * 5)])
});
document.addEventListener('contextmenu', event => event.preventDefault());
document.body.innerHTML = `\n<center style="font-family: Arial;">\n<span style="font-size: 40px; font-weight: 760;">Access denied on this page.<br>Message: We do not accept idiots</span>\n<p style="font-size: 20pt; font-weight: 450;">To ensure you are actually smart, try to find where the secret unlock button is</p>\n<button style="position: absolute; top: ${Math.round(Math.random() * 40 + 30)}vh; right: ${Math.round(Math.random() * 90)}vw; transform: scale(200%); opacity: 0.075; background-color: transparent; color: rgb(70, 70, 70);" onclick="localStorage.removeItem('idiottestfailedforwxsite'); window.location.href = window.location.href;" tabindex="-1">UNLOCK</button>\n</div>\n</center>\n`;
} else if (ChancesOfIdiotTestFail == 1) {
document.querySelector(".main-div").innerHTML = `<center><video src="RickRoll.mp4" autoplay style="width: 90vw; height: 90vh;" controls loop></video><span style="display: block;">Watch the video above till the end</span></center>`;
} else if (ChancesOfIdiotTestFail == 2) {
document.querySelector(".main-div").innerHTML = `<center><video src="JoshHutchersonWhistle.mp4" autoplay style="width: 90vw; height: 90vh;" controls loop></video><span style="display: block;">Watch the video above till the end</span></center>`;
}
}
function PlayPause() {
if (document.querySelector(".audio").paused) {
document.querySelector(".audio").play();
} else if (!document.querySelector(".audio").paused) {
document.querySelector(".audio").pause();
}
}
function StopAudio() {
document.querySelector(".audio").pause();
document.querySelector(".audio").currentTime = 0;
}
var AudioImgColors;
function BlueTheme() {
document.body.style.background = "linear-gradient(90deg, rgb(0, 15, 80), rgb(0, 55, 100))";
document.querySelector(".side-div-div").style.background = "linear-gradient(75deg, blue, rgba(0, 40, 175, 0.7))";
document.querySelector(".hr1").style.borderColor = "lime";
document.querySelector(".hr2").style.borderColor = "lightblue";
document.querySelector(".hr3").style.borderColor = "lime";
document.querySelector("fieldset").style.borderColor = "blue";
AudioImgColors = "blue";
if (document.querySelector(".audio").paused) {
document.querySelector(".play-pause-btn").src = "play-xxl-blue.png";
} else {
document.querySelector(".play-pause-btn").src = "pause-xxl-blue.png";
}
document.querySelector(".stop-btn").src = "stop-xxl-blue.png";
document.querySelector(".backward-img-piece1").src = "play-xxl-blue.png";
document.querySelector(".backward-img-piece2").src = "play-xxl-blue.png";
document.querySelector(".forward-img-piece1").src = "play-xxl-blue.png";
document.querySelector(".forward-img-piece2").src = "play-xxl-blue.png";
localStorage.setItem('themeforwxsite', 'blue');
document.getElementById('sett1').checked = true;
}
function GreenTheme() {
document.body.style.background = "linear-gradient(90deg, rgb(0, 80, 15), rgb(0, 100, 55))";
document.querySelector(".side-div-div").style.background = "linear-gradient(75deg, green, rgba(0, 175, 40, 0.7))";
document.querySelector(".hr1").style.borderColor = "lightblue";
document.querySelector(".hr2").style.borderColor = "lime";
document.querySelector(".hr3").style.borderColor = "lightblue";
document.querySelector("fieldset").style.borderColor = "green";
localStorage.setItem('themeforwxsite', 'green');
AudioImgColors = "green";
if (document.querySelector(".audio").paused) {
document.querySelector(".play-pause-btn").src = "play-xxl-green.png";
} else {
document.querySelector(".play-pause-btn").src = "pause-xxl-green.png";
}
document.querySelector(".stop-btn").src = "stop-xxl-green.png";
document.querySelector(".backward-img-piece1").src = "play-xxl-green.png";
document.querySelector(".backward-img-piece2").src = "play-xxl-green.png";
document.querySelector(".forward-img-piece1").src = "play-xxl-green.png";
document.querySelector(".forward-img-piece2").src = "play-xxl-green.png";
document.getElementById('sett2').checked = true;
}
if (localStorage.getItem('themeforwxsite') == 'green') {
document.body.style.background = "linear-gradient(90deg, rgb(0, 80, 15), rgb(0, 100, 55))";
document.querySelector(".side-div-div").style.background = "linear-gradient(75deg, green, rgba(0, 175, 40, 0.7))";
document.querySelector(".hr1").style.borderColor = "lightblue";
document.querySelector(".hr2").style.borderColor = "lime";
document.querySelector(".hr3").style.borderColor = "lightblue";
document.querySelector("fieldset").style.borderColor = "green";
document.querySelector(".play-pause-btn").src = "play-xxl-green.png";
document.querySelector(".stop-btn").src = "stop-xxl-green.png";
document.querySelector(".backward-img-piece1").src = "play-xxl-green.png";
document.querySelector(".backward-img-piece2").src = "play-xxl-green.png";
document.querySelector(".forward-img-piece1").src = "play-xxl-green.png";
document.querySelector(".forward-img-piece2").src = "play-xxl-green.png";
document.getElementById('sett2').checked = true;
AudioImgColors = "green";
} else {
document.body.style.background = "linear-gradient(90deg, rgb(0, 15, 80), rgb(0, 55, 100))";
document.querySelector(".side-div-div").style.background = "linear-gradient(75deg, blue, rgba(0, 40, 175, 0.7))";
document.querySelector(".hr1").style.borderColor = "lime";
document.querySelector(".hr2").style.borderColor = "lightblue";
document.querySelector(".hr3").style.borderColor = "lime";
document.querySelector("fieldset").style.borderColor = "blue";
document.querySelector(".play-pause-btn").src = "play-xxl-blue.png"
document.querySelector(".stop-btn").src = "stop-xxl-blue.png";
document.querySelector(".backward-img-piece1").src = "play-xxl-blue.png";
document.querySelector(".backward-img-piece2").src = "play-xxl-blue.png";
document.querySelector(".forward-img-piece1").src = "play-xxl-blue.png";
document.querySelector(".forward-img-piece2").src = "play-xxl-blue.png";
document.getElementById('sett1').checked = true;
AudioImgColors = "blue";
}
var windowEvent;
var KbAudioSett;
if (localStorage.getItem('kbaudiosettforwxsite') == '0') {
KbAudioSett = 0;
document.getElementById("sett8").checked = true;
} else if (localStorage.getItem('kbaudiosettforwxsite') == '1') {
KbAudioSett = 1;
document.getElementById("sett7").checked = true;
} else {
KbAudioSett = 1;
}
function IdiotQuiz() {
if (localStorage.getItem("trollsettforwxsite") == '1') {
var IdiotTest = window.prompt(`Idiot Test!! \nType below the answer of the following question: \nIf X=3 and Y=1 then solve this: 2x+3y=??`);
if (IdiotTest == 9) {
window.alert('Okay! You are good to go');
} else if (IdiotTest == null) {
if (document.querySelector(".header").innerText.indexOf("projects") == 10) {
document.querySelector(".header").innerHTML = `
<h1 style="vertical-align: top; margin-top: 0; margin-bottom: 0; color: lime; display: inline-block;">WinXprt</h1><h2 style="vertical-align: bottom; margin: 0; color: darkblue; display: inline-block;">'s projects</h2>&nbsp;<span style="color: darkblue; font-size: 14pt; font-weight: 900; display: inline-block; vertical-align: bottom;">(At least you chose wisely)</span>`;
setTimeout(`document.querySelector(".header").innerHTML = \`\n<h1 style="vertical-align: top; margin-top: 0; margin-bottom: 0; color: lime; display: inline-block;">WinXprt</h1><h2 style="vertical-align: bottom; margin: 0; color: darkblue; display: inline-block;">'s projects</h2>\n\``, 5000);
} else {
document.querySelector(".header").innerHTML = `<h1 style="vertical-align: top; margin-top: 0; margin-bottom: 0; color: lime; display: inline-block;">WinXprt</h1><h2 style="vertical-align: bottom; margin: 0; color: darkblue; display: inline-block;">'s page</h2>&nbsp;<span style="color: darkblue; font-size: 14pt; font-weight: 900; display: inline-block; vertical-align: bottom;">(At least you chose wisely)</span>`;
setTimeout(`document.querySelector(".header").innerHTML = \`\n<h1 style="vertical-align: top; margin-top: 0; margin-bottom: 0; color: lime; display: inline-block;">WinXprt</h1><h2 style="vertical-align: bottom; margin: 0; color: darkblue; display: inline-block;">'s page</h2>\n\``, 5000);
}
} else {
localStorage.setItem('idiottestfailedforwxsite', '1');
window.location.href = window.location.href;
}
} else {
window.alert("You're already here!")
}
}

function OnKeyDownAudioControls(event) {
if (event.key == "ArrowRight") {
if (localStorage.getItem("themeforwxsite") == null) {var ThemeColor = "blue";} else {var ThemeColor = localStorage.getItem("themeforwxsite")}
if (ThemeColor == "green") {
ThemeColor = "rgba(0, 160, 0, 0.7)";
} else {
ThemeColor = "rgba(0, 0, 150, 0.7)";
}
document.querySelector('.forw-track-shower').style.background = ThemeColor;
document.querySelector(".next-track").click();
document.querySelector('.forw-track-shower').style.display = 'block';
setTimeout("document.querySelector('.forw-track-shower').style.display = 'none';", 300);
}
if (event.key == "ArrowLeft") {
document.querySelector(".prev-track").click();
if (localStorage.getItem("themeforwxsite") == null) {var ThemeColor = "blue";} else {var ThemeColor = localStorage.getItem("themeforwxsite")}
if (ThemeColor == "green") {
ThemeColor = "rgba(0, 160, 0, 0.7)";
} else {
ThemeColor = "rgba(0, 0, 150, 0.7)";
}
document.querySelector('.prev-track-shower').style.background = ThemeColor;
document.querySelector('.prev-track-shower').style.display = 'block';
setTimeout("document.querySelector('.prev-track-shower').style.display = 'none';", 300);
}
if (event.code == "Space") {
PlayPause();
if (localStorage.getItem("themeforwxsite") == null) {var ThemeColor = "blue";} else {var ThemeColor = localStorage.getItem("themeforwxsite")}
if (ThemeColor == "green") {
ThemeColor = "rgba(0, 160, 0, 0.7)";
} else {
ThemeColor = "rgba(0, 0, 150, 0.7)";
}
document.querySelector('.play-pause-shower').style.background = ThemeColor;
document.querySelector(".play-pause-shower-img").src = document.querySelector(".play-pause-btn").src;
document.querySelector('.play-pause-shower').style.display = 'block';
setTimeout("document.querySelector('.play-pause-shower').style.display = 'none';", 300);
}
if (event.code == "KeyP") {
document.querySelector('.playlist-shower').click();
}
if (event.code == "KeyM") {
if (document.querySelector('.audio').muted) {
document.querySelector('.muted-audio-shower-img').src = "volume-up-xxl.png";
document.querySelector('.audio').muted = false;
} else {
document.querySelector('.muted-audio-shower-img').src = "mute-xxl.png";
document.querySelector('.audio').muted = true;
}
if (localStorage.getItem("themeforwxsite") == null) {var ThemeColor = "blue";} else {var ThemeColor = localStorage.getItem("themeforwxsite")}
if (ThemeColor == "green") {
ThemeColor = "rgba(0, 160, 0, 0.7)";
} else {
ThemeColor = "rgba(0, 0, 150, 0.7)";
}
document.querySelector('.muted-audio-shower').style.background = ThemeColor;
document.querySelector('.muted-audio-shower').style.display = 'block';
setTimeout("document.querySelector('.muted-audio-shower').style.display = 'none';", 300);
}
}

document.querySelector(".audio").onplay = function() {
if (AudioImgColors == "blue") {
document.querySelector(".play-pause-btn").src = 'pause-xxl-blue.png';
} else {
document.querySelector(".play-pause-btn").src = 'pause-xxl-green.png';
}
document.querySelector(".play-pause-btn").title = "Pause music";
document.querySelector(".play-pause-btn").style.animation = "fade-in-out 2.5s linear infinite";
document.querySelector(".stop-btn").style.animation = "fade-in-out 2.5s linear infinite";
document.querySelector(".next-track").style.animation = "fade-in-out 2.5s linear infinite";
document.querySelector(".prev-track").style.animation = "fade-in-out 2.5s linear infinite";
};
document.querySelector(".audio").onpause = function () {
if (AudioImgColors == "blue") {
document.querySelector(".play-pause-btn").src = "play-xxl-blue.png";
} else if (AudioImgColors == "green") {
document.querySelector(".play-pause-btn").src = "play-xxl-green.png";
}
document.querySelector(".play-pause-btn").title = "Play music";
document.querySelector(".play-pause-btn").style.animation = "";
document.querySelector(".stop-btn").style.animation = "";
document.querySelector(".next-track").style.animation = "";
document.querySelector(".prev-track").style.animation = "";
};
var CurrentSong;
const SongArray = [
"Coldplay - Viva la Vida",
"Coldplay - Clocks",
"Coldplay - The Scientist",
"Coldplay - Yellow",
"Coldplay - Fix you",
"Coldplay - In My Place",
"Coldplay - Don't Panic",
"Coldplay - Warning Sign",
"Coldplay - The Hardest Part",
"Coldplay - Miracles",
"Coldplay - Talk",
"Coldplay - Everything's Not Lost",
"Coldplay - Swallowed in the Sea",
"Keane - Silenced By The Night",
"He Is We - I Wouldn't Mind",
"Cast - Walkaway",
"Soul Asylum - Runaway Train",
"Green Day - Boulevard of Broken Dreams",
"Green Day - Wake Me Up When September Ends",
"Green Day - Good Riddance",
"Green Day - Holiday",
"Green Day - When I Come Around",
"Green Day - Basket Case",
"Green Day - Give Me Novacaine",
"Green Day - Redundant",
"Green Day - When It's Time",
"Red Hot Chili Peppers - Snow (Hey Oh)",
"Red Hot Chili Peppers - Californication",
"Rascal Flatts - Life Is A Highway",
"blink-182 - All the Small Things",
"blink-182 - What's My Age Again",
"blink-182 - Adam's Song",
"blink-182 - The Rock Show",
"blink-182 - I Miss You",
"blink-182 - First Date",
"blink-182 - Anthem",
"blink-182 - Anthem Part Two",
"blink-182 - Story Of A Lonely Guy",
"blink-182 - Josie",
"blink-182 - Man Overboard",
"blink-182 - M+M's",
"Oasis - Wonderwall",
"Oasis - Champagne Supernova"
];
function ShuffleSong() {
CurrentSongNum = Math.round(Math.random() * (SongArray.length - 1));
document.querySelector(".audio").src = SongArray[CurrentSongNum] + ".mp3";
document.querySelector(".music-info").innerHTML = `
<span>♫&nbsp;</span> 
<span><b>${SongArray[CurrentSongNum].split(" - ")[0]}</b></span>
<hr style="margin: 0;">
<span>${SongArray[CurrentSongNum].split(" - ")[1]}</span>
`;
}
ShuffleSong();
function RenderMusicInfo() {
document.querySelector(".music-info").innerHTML = `
<span>♫&nbsp;</span> 
<span><b>${SongArray[CurrentSongNum].split(" - ")[0]}</b></span>
<hr style="margin: 0;">
<span>${SongArray[CurrentSongNum].split(" - ")[1]}</span>
`;
for (let o = 0; o < SongArray.length; o++) {
for (let i = 0; i < SongArray.length; i++) {
document.querySelector(".song-name-" + i).style.color = "white";
}
document.querySelector(".song-name-" + CurrentSongNum).style.color = "yellow";
}
}
function TrackChange(value) {
if (value == 1) {
if (CurrentSongNum == SongArray.length - 1) {
CurrentSongNum = 0;
document.querySelector(".audio").src = SongArray[CurrentSongNum] + ".mp3";
document.querySelector(".audio").play();
RenderMusicInfo();
return;
}
CurrentSongNum += 1;
document.querySelector(".audio").src = SongArray[CurrentSongNum] + ".mp3";
document.querySelector(".audio").play();
} else if (value == -1) {
if (CurrentSongNum == 0) {
CurrentSongNum = SongArray.length - 1;
document.querySelector(".audio").src = SongArray[CurrentSongNum] + ".mp3";
document.querySelector(".audio").play();
RenderMusicInfo();
return;
}
CurrentSongNum -= 1;
document.querySelector(".audio").src = SongArray[CurrentSongNum] + ".mp3";
document.querySelector(".audio").play();
}
RenderMusicInfo();
}
function TrollSett(value, skip) {
if (skip == 0) {localStorage.setItem("trollsettforwxsite", `${value}`);}
if (localStorage.getItem("trollsettforwxsite") == '0') {document.getElementById("sett6").checked = true;}
if (localStorage.getItem("trollsettforwxsite") == '1') {document.getElementById("sett5").checked = true;}
}
document.querySelector(".audio-sfx").volume = 0.6;
var MouseOutMeme = 0;
var PausedMusic;
if (localStorage.getItem("trollsettforwxsite") == '1') {
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

window.addEventListener('keydown', function() {
if ((event.keyCode == 32) && (event.target == document.body)) {
event.preventDefault();
}
});

function ShowPlaylist() {
if (document.querySelector(".music-playlist").style.display == "none") {
document.querySelector(".music-playlist").style.animation = "fade-in ease 0.6s";
document.querySelector(".music-playlist").style.display = "block";
document.querySelector(".music-playlist-div").style.animation = "music-playlist-div-anim 1.2s ease";
document.querySelector(".playlist-shower").innerText = "Hide playlist";
setTimeout("document.querySelector('.music-playlist-div').style.animation = ''", 500);
} else if (document.querySelector(".music-playlist").style.display == "block") {
document.querySelector(".music-playlist-div").style.animation = "music-playlist-div-rev-anim 0.5s ease";
document.querySelector(".music-playlist").style.animation = "fade-out 0.7s ease";
document.querySelector(".playlist-shower").innerText = "Show playlist";
setTimeout(`document.querySelector\('.music-playlist'\).style.display = "none";`, 500);
}
}
var PlaylistHtml = '';
var j;
for (var i = 0; i < SongArray.length; i++) {
if (SongArray[i] == SongArray[CurrentSongNum]) {
PlaylistHtml += `<span class="song-names song-name-${i}" onclick="CurrentSongNum = ${i}; document.querySelector('.audio').src = \`${SongArray[i]}\` + '.mp3'; document.querySelector('.audio').play(); RenderMusicInfo();" style="cursor: pointer; color: yellow;">&raquo; ${SongArray[i]}</span>\n<br>`;
continue;
}
PlaylistHtml += `<span class="song-names song-name-${i}" onclick="CurrentSongNum = ${i}; document.querySelector('.audio').src = \`${SongArray[i]}\` + '.mp3'; document.querySelector('.audio').play(); RenderMusicInfo();" style="cursor: pointer;">&raquo; ${SongArray[i]}</span>\n<br>`;
}
document.querySelector(".music-playlist-list").innerHTML = `${PlaylistHtml}`;
for (let j = 0; j < SongArray.length; j++) {
document.querySelector(".song-name-" + j).addEventListener("click", function() {
for (let i = 0; i < SongArray.length; i++) {
document.querySelector(".song-name-" + i).style = "color: white; cursor: pointer;";
}
this.style = "color: yellow; cursor: pointer;";
});
}
document.querySelector(".gear-icon").addEventListener("click", () => {
if (document.querySelector("fieldset").style.display == "none") {
document.querySelector("fieldset").style.display = "block";
document.querySelector("fieldset").style.animation = "fade-in ease 1s";
document.querySelector(".gear-icon").style.animation = "gear-rotate ease 1s";
setTimeout("document.querySelector('.gear-icon').style.animation = '';", 1000);
} else if (document.querySelector("fieldset").style.display == "block") {
document.querySelector("fieldset").style.animation = "fade-out ease 0.5s";
document.querySelector(".gear-icon").style.animation = "gear-rotate-reverse ease 0.5s";
setTimeout("document.querySelector('.gear-icon').style.animation = '';", 500);
setTimeout("document.querySelector('fieldset').style.display = 'none';", 500);
}
})
function AudioControlsSet(value) {
if (value == 1) {
document.getElementById("sett7").checked = true;
localStorage.setItem("kbaudiosettforwxsite", "1");
KbAudioSett = 1;
} else if (value == 0) {
document.getElementById("sett8").checked = true;
localStorage.setItem("kbaudiosettforwxsite", "0");
KbAudioSett = 0;
}
}

//ONLY ON INDEX.HTML. CODE ABOVE
function YtIframeCookies(value) {
if (value == 0) {
document.querySelector('.iframe1').src="https://www.youtube-nocookie.com/embed/07kkCVbjY7E?hl=en-us&amp;rel=0&amp;color=white&amp;disablekb=1&amp;mute=1&amp;autoplay=0";
document.querySelector('.iframe2').src="https://www.youtube-nocookie.com/embed/SFmRsIMJ0aE?hl=en-us&amp;rel=0&amp;color=white&amp;disablekb=1&amp;mute=1&amp;autoplay=0";
document.querySelector('.iframe3').src="https://www.youtube-nocookie.com/embed/pAoysWh-PNY?hl=en-us&amp;rel=0&amp;color=white&amp;disablekb=1&amp;mute=1&amp;autoplay=0";
localStorage.setItem('ytcookiesforwxsite', '0');
} else if (value == 1) {
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

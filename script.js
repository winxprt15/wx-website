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
document.querySelector(".main-div").innerHTML = `<center><video src="RickRoll.mp4" autoplay style="width: 85vw; height: 85vh;" controls loop></video><span style="display: block;">Watch the video above till the end</span></center>`;
} else if (ChancesOfIdiotTestFail == 2) {
document.querySelector(".main-div").innerHTML = `<center><video src="JoshHutchersonWhistle.mp4" autoplay style="width: 85vw; height: 85vh;" controls loop></video><span style="display: block;">Watch the video above till the end</span></center>`;
}
} else {
var HTMLPage = "Home";
if (!window.location.search == "") {
if ((HTMLPage == "Home") & (window.location.search.split("?")[1].split("page=")[1] == "home")) {
HTMLPage = "Projects";
PageSwitch();
} else if ((HTMLPage == "Projects") || (window.location.search.split("?")[1].split("page=")[1] == "projects")) {
HTMLPage = "Home";
PageSwitch();
}
} else {
HTMLPage = "Projects";
PageSwitch();
}
}
function PageSwitch() {
if (HTMLPage == "Projects") {
document.querySelector(".main-div").innerHTML = '\n<center>\n<div style="animation: bigger-inputfield 7s linear; transform: scale(600%); position: fixed; display: none; padding: 10px; margin-top: 25px; background-color: rgba(100, 100, 100, 0.55); margin-top: 40vh; margin-right: 26vw;" class="mouse-leave-mess">\nWhat are you doing outside??\n<br><br>\n<input class="input-mouse-leave" type="text" placeholder="Please Describe">\n</div>\n<h3>Welcome to my website!</h3>\n<span style="margin-bottom: 10px; padding-left: 12px; padding-right: 12px;">Hello World!</span>\n<span style="font-size: 10pt; display: inline-block; width: 100%; text-align: right;">Last update: Sunday 16/2/2025</span>\n<hr class="hr1" style="border-color: lime;">\n<h2 style="display: inline-block; font-size: 126%;">Upgrading Windows ME until it freezes&nbsp;</h2><h4 style="display: inline-block;">GREEK</h4>\n<br><span style="display: block; padding-left: 12%; padding-right: 12%;" class="section-desc">The ultimate experiment! It wasn\'t until 19th of April 2023 when I tried to install Windows ME and upgrade it without changing any hardware settings until I barely could install Windows 8.1 (I had all my ISOs in Greek language back then)</span>\n<p style="display: block;"><iframe class="iframe1" src="https://www.youtube.com/embed/07kkCVbjY7E?hl=en-us&amp;rel=0&amp;mute=1&amp;autoplay=0&amp;color=white&amp;disablekb=1" width="560" height="315" title="Upgrading Windows ME until it crashes GREEK" frameborder="0" allowfullscreen=""></iframe></p>\n</center>\n<hr class="hr2" style="border-color: lightblue;">\n<center>\n<h2 style="display: block;">Easter eggs of old Windows versions</h2>\n<span style="display: inline-block; padding-left: 12%; padding-right: 12%;" class="section-desc">On the video above I have showed easter eggs of old Windows OSes. It would be quite ironical not knowing the existence of these back in the days when XP came out.\nBut it wasn\'t until 2001 when Microsoft had decided to remove these easter eggs and never put them again\n</span>\n<p><iframe class="iframe2" src="https://www.youtube.com/embed/SFmRsIMJ0aE?hl=en-us&amp;rel=0&amp;color=white&amp;disablekb=1&amp;mute=1&amp;autoplay=0" width="560" height="315" title="Easter Eggs of old Windows OSes" frameborder="0" allowfullscreen=""></iframe></p>\n</center>\n<hr class="hr3" style="border-color: lime;">\n<div>\n<center>\n<h2 style="display: block; margin-bottom: -20px;">Installing Windows Whistler Build 2446</h2><h3 style="display: block;">(20th Anniversary)</h3>\n<span class="section-desc" style="display: inline-block; padding-left: 12%; padding-right: 12%;">On the video below, I installed and tried one of Windows Whistler\'s builds on a VM, since it was its 20th anniversary day. This build had many differences in comparison to the final and famous Windows XP version at a closer look, for instance the Red Moon Desert, shown as default in this build, was replaced with Bliss wallpaper in the final build</span>\n<p><iframe class="iframe3" width="560" height="315" src="https://www.youtube.com/embed/pAoysWh-PNY?hl=en-us&amp;rel=0&amp;color=white&amp;disablekb=1&amp;mute=1&amp;autoplay=0" title="Installing Windows Whistler Build 2446" frameborder="0" allowfullscreen=""></iframe></p>\n</center>\n</div>\n';
document.querySelector(".main-div").style.marginTop = "";
document.querySelector(".header").innerHTML = `\n<h1 style="vertical-align: top; margin-top: 0; margin-bottom: 0; color: lime; display: inline-block;">WinXprt</h1><h2 style="vertical-align: bottom; margin: 0; color: darkblue; display: inline-block;">'s page</h2>\n`;
document.querySelector(".a-link3").innerText = "Projects by me";
document.querySelector(".a-link4").innerText = "Home page";
document.title = "WinXprt Page";
HTMLPage = "Home";
} else if (HTMLPage == "Home") {
document.querySelector(".main-div").innerHTML = '\n<center>\n<div style="animation: bigger-inputfield 7s linear; transform: scale(600%); position: fixed; display: none; padding: 10px; margin-top: 25px; background-color: rgba(100, 100, 100, 0.55); margin-top: 40vh; margin-right: 26vw;" class="mouse-leave-mess">\nWhat are you doing outside??\n<br><br>\n<input class="input-mouse-leave" type="text" placeholder="Please Describe">\n</div>\n<h4 style="margin-bottom: 5px;">Welcome to the projects site!</h4>\n<span style="margin-bottom: 5px; padding-left: 12px; padding-right: 12px;">Have a look on some of the projects I\'ve made since the last years!</span>\n<span style="font-size: 10pt; display: inline-block; width: 100%; text-align: right;">Last update: Sunday 16/2/2025</span>\n<hr class="hr1" style="border-color: lime;">\n<h2 style="display: block;">Secondary Locker</h2>\n<span class="section-desc">The script that got <mark>flagged</mark> as <i><u>trojan</u></i> by <cite><a style="color: yellow; text-decoration: none;" href="https://www.virustotal.com/" target="_blank">VirusTotal</a></cite> with 8% of all antivirus software flagging it as a <u>threat</u>. <br>In fact, this was a project that didn\'t even take over 4 months to complete. I was inspired by <i>a YouTube video called <q><a href="https://youtu.be/Tp5M00_SZD0?t=334s" target="_blank" style="color: yellow;">4 Cool VBS Scripts With Codes</a></q> which was uploaded by techkitv exactly the day I became a year old (1/2/2011)</i> and decided to remake one and add some special ingredients in it. And that was where I had never expected the project to be that heavy due to what virus tests resulted to.</span>\n<a href="SecondaryLocker.PNG" target="_blank"><img class="seclocker-image" src="SecondaryLocker.PNG" style="transition: transform ease 1s; z-index: 1;" width="600" title="Screenshot of the VBS Script. Click to view on new tab"></a>\n<span class="section-desc" style="display: block;">Basically what this does is that it <q>locks your computer</q> with a password that you\'ve set before. (It disables Task Manager, Registry Editor, Command Prompt, closes some known apps opened before and closes Explorer.exe)<br><u>Tip:</u> Put this file on your <b>startup folder</b><br>(<b title="Copy and pase this in search on Start Menu to open path"> Shell:Startup </b>)<br>so it runs after user login (Delay may occur)<br><a href="https://github.com/winxprt15/secondarylocker/blob/main/SecondaryLocker.vbs" target="_blank" style="color: yellow;">Click to view it on GitHub</a></span>\n<hr class="hr2" style="border-color: lightblue;">\n<h2 style="display: block;">The ultimate settings tool just from batch!</h2>\n<span class="section-desc">This project is the one that took me the most time to make! With this batch script you can change system settings, customize appearance (+ Access to \'hidden\' settings), change date/time and region settings and even more!<br>This project took me a year to finish (meaning I haven\'t found something else to put after research) and it has been of the most time-consuming projects I had ever worked on. I had firstly started this project οn Spring of 2023 but I didn\'t continue the project until Summer. After a year, I started thinking about ways to continue the project (I didn\'t even know where to start of honestly). And that led me to the 4th version of the script with much more settings and much more improvements made on October 2024.<br><a href="https://github.com/winxprt15/control10/blob/main/control10-v4.bat" target="_blank" style="color: yellow;">Click to view it on GitHub</a></span>\n<a target="_blank" href="Control10V4.PNG"><img class="control10v4-image" style="transition: transform ease 1s; z-index: 1;" src="Control10V4.PNG" width="600" title="Screenshot of the batch script. Click to view on new tab"></a>\n<hr class="hr3" style="display: block; border-color: lime;">\n<h2 style="display: block;">The NewTab HTML project</h2>\n<span class="section-desc">The best way to start browing the web just from an HTML! This HTML page has the ability to search on the web for you and even pick between Google\'s search engine or Bing\'s search engine. You also have the ability to go to any pages you want just by typing the FULL URL ADDRESS<br><a href="https://github.com/winxprt15/newtabhtml/blob/main/index.html" target="_blank" style="color: yellow;">Click to view it on GitHub</a></span>\n<a href="NewTabHTMLStartup.PNG" target="_blank"><img class="newtabhtml-image" style="transition: transform 1s ease; z-index: 1; margin-bottom: 40px;" src="NewTabHTMLStartup.PNG" width="600" title="Screenshot of the NewTab startup. Click to view on new tab"></a>\n</center>\n';
document.querySelector(".main-div").style.marginTop = "15px";
document.querySelector(".header").innerHTML = `\n<h1 style="vertical-align: top; margin-top: 0; margin-bottom: 0; color: lime; display: inline-block;">WinXprt</h1><h2 style="vertical-align: bottom; margin: 0; color: darkblue; display: inline-block;">'s projects</h2>\n`;
document.querySelector(".a-link3").innerText = "Home page";
document.querySelector(".a-link4").innerText = "Projects by me";
document.title = "WinXprt Projects";
HTMLPage = "Projects";
}
}
document.querySelector(".a-link3").addEventListener("click", () => {
PageSwitch();
});
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
if (event.key == "0") {
document.querySelector('.stop-btn').click();
if (localStorage.getItem("themeforwxsite") == null) {var ThemeColor = "blue";} else {var ThemeColor = localStorage.getItem("themeforwxsite")}
if (ThemeColor == "green") {
ThemeColor = "rgba(0, 160, 0, 0.7)";
} else {
ThemeColor = "rgba(0, 0, 150, 0.7)";
}
document.querySelector('.play-pause-shower').style.background = ThemeColor;
document.querySelector(".play-pause-shower-img").src = document.querySelector(".stop-btn").src;
document.querySelector('.play-pause-shower').style.display = 'block';
setTimeout("document.querySelector('.play-pause-shower').style.display = 'none';", 300);
}
if (event.code == "KeyS") {
document.querySelector('.gear-icon').click();
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

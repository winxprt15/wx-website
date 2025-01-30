function PlayPause() {
if (document.querySelector(".audio").paused) {
document.querySelector("audio").play();
document.querySelector(".play-pause-btn").src = 'pause-xxl.png'
document.querySelector(".play-pause-btn").style = "position: fixed; margin-top: 38vh; margin-left: 89vw; animation: fade-in-out 2.5s linear infinite;";
document.querySelector(".play-pause-btn").title = "Pause music";
document.querySelector(".stop-btn").style = "position: fixed; margin-top: 50.5vh; margin-left: 89vw; animation: fade-in-out 2.5s linear infinite;";
} else {
document.querySelector("audio").pause();
document.querySelector(".play-pause-btn").src = 'play-xxl.png'
document.querySelector(".play-pause-btn").style = "position: fixed; margin-top: 38vh; margin-left: 89vw;";
document.querySelector(".play-pause-btn").title = "Play music";
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
let ThemeForWxSite;
function BlueTheme() {
document.body.style = "background: linear-gradient(90deg, rgb(0, 15, 80), rgb(0, 55, 100));";
document.querySelector(".side-div-div").style = "border-radius: 0px 0px 20px 50px; padding: 2px; background: linear-gradient(75deg, blue, rgba(0, 40, 175, 0.7));";
document.querySelector(".hr1").style = "border-color: lime;";
document.querySelector(".hr2").style = "border-color: lightblue;";
document.querySelector("fieldset").style = "border-radius: 25px; border-color: blue; width: 95%;";
localStorage.setItem('themeforwxsite', 'blue');
document.getElementById('sett1').checked = ' ';
}
function GreenTheme() {
document.body.style = "background: linear-gradient(90deg, rgb(0, 80, 15), rgb(0, 100, 55));";
document.querySelector(".side-div-div").style = "border-radius: 0px 0px 20px 50px; padding: 2px; background: linear-gradient(75deg, green, rgba(0, 175, 40, 0.7));";
document.querySelector(".hr1").style = "border-color: lightblue;";
document.querySelector(".hr2").style = "border-color: lime;";
document.querySelector("fieldset").style = "border-radius: 25px; border-color: green; width: 95%;"
localStorage.setItem('themeforwxsite', 'green');
document.getElementById('sett2').checked = ' ';
}
if (localStorage.getItem('themeforwxsite') == 'green') {
document.body.style = "background: linear-gradient(90deg, rgb(0, 80, 15), rgb(0, 100, 55));";
document.querySelector(".side-div-div").style = "border-radius: 0px 0px 20px 50px; padding: 2px; background: linear-gradient(75deg, green, rgba(0, 175, 40, 0.7));";
document.querySelector(".hr1").style = "border-color: lightblue;";
document.querySelector(".hr2").style = "border-color: lime;";
document.querySelector("fieldset").style = "border-radius: 25px; border-color: green; width: 95%;"
localStorage.setItem('themeforwxsite', 'green');
document.getElementById('sett2').checked = ' ';
} else {
document.body.style = "background: linear-gradient(90deg, rgb(0, 15, 80), rgb(0, 55, 100));";
document.querySelector(".side-div-div").style = "border-radius: 0px 0px 20px 50px; padding: 2px; background: linear-gradient(75deg, blue, rgba(0, 40, 175, 0.7));";
document.querySelector(".hr1").style = "border-color: lime;";
document.querySelector(".hr2").style = "border-color: lightblue;";
document.querySelector("fieldset").style = "border-radius: 25px; border-color: blue; width: 95%;";
document.getElementById('sett1').checked = ' ';
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

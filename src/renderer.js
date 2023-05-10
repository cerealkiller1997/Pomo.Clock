const timerDisplay = document.querySelector('.time-left');
let countdown;

function timer(minutes) {
  clearInterval(countdown);

  const now = Date.now();
  const then = now + minutes * 60 * 1000;
  displayTimeLeft(minutes * 60);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      //Activar la notificacion//
      const beepSound = document.getElementById('beep');
      beepSound.play();
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  timerDisplay.textContent = display;
}

const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');

function startTimer() {
  //aqui se determinan los minutos del contador
  const minutes = 60;
  timer(minutes);
}

function stopTimer() {
  clearInterval(countdown);
  timerDisplay.textContent = "60:00";
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);

//sound on click buttons
const myButtonStart = document.getElementById("myButtonStart");

myButtonStart.onclick = function() {
  myAudio.play();
}

const myButtonStop = document.getElementById("myButtonStop");

myButtonStop.onclick = function() {
  myAudio.play();
}

//Date
var months = ['January','February','March','April','May','June','July',
'August','September','October','November','December'];       
var tomorrow = new Date();
tomorrow.setTime(tomorrow.getTime() + (1000*3600*24));       
document.getElementById("spanDate").innerHTML = months[tomorrow.getMonth()] + " " + tomorrow.getDate()+ ", " + tomorrow.getFullYear();

//AlmacenarDatos


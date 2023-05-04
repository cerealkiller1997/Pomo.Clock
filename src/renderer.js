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
  const minutes = 60;
  timer(minutes);
}

function stopTimer() {
  clearInterval(countdown);
  timerDisplay.textContent = "60:00";
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);

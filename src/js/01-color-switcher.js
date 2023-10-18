function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
startBtn.addEventListener('click', onClickStart)
stopBtn.addEventListener('click', onClickStop)
let timerId = 1;

function onClickStart() {
    startBtn.setAttribute('disabled', 'true');
    timerId = setInterval(changeBodyColor, 1000);
}

function onClickStop() {
        startBtn.removeAttribute('disabled');
        clearInterval(timerId);
    }

function changeBodyColor() {
    bodyEl.style.backgroundColor = getRandomHexColor();
}




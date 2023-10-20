import flatpickr from "flatpickr";
import { Notify } from "notiflix"; 
import "flatpickr/dist/flatpickr.min.css";


const selectors = {
  input: document.querySelector('#datetime-picker'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
  startBtn: document.querySelector('button[data-start]'),
}

let remainTime = {};
let timerId = 0;
let chosenTime = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      return onDateInPast();
    }
    enableStartBtn(selectedDates[0]);
  }
}

function disableStartBtn() {
  selectors.startBtn.setAttribute('disabled', 'true');
}

function disableInput() {
  selectors.input.setAttribute('disabled', 'true');
}

function enableStartBtn(selDate) {
  selectors.startBtn.removeAttribute('disabled');
  chosenTime = selDate;
    if (timerId > 0) {
     clearInterval(timerId); 
    }
    Notify.success('Date in the future successfully selected')
    refreshTimer();
  }

function enableInput() {
  selectors.input.removeAttribute('disabled');
}

disableStartBtn();




const selectedDate = flatpickr(selectors.input, options)
console.dir(selectedDate);
selectors.startBtn.addEventListener('click', onClickStart)

function onClickStart() {
  disableStartBtn();
  disableInput();
  if (chosenTime <= Date.now()) {
    clearHtml();
    Notify.info('The timer is already out of date..')
    return
  }
  Notify.info('Starting timer..')
  timerId = setInterval(refreshTimer, 1000)
}

function clearHtml() {
  selectors.days.innerHTML = "00";
  selectors.hours.innerHTML = "00";
  selectors.minutes.innerHTML = "00";
  selectors.seconds.innerHTML = "00";
}

function onDateInPast() {
  disableStartBtn();
  clearInterval(timerId);
  timerId = 0;
  clearHtml();
  return Notify.failure('Please choose a date in the future');
}

function refreshTimer() {
  if (chosenTime <= Date.now()) {
    clearInterval(timerId);
    timerId = 0;
    clearHtml();
    enableInput();
    return Notify.success('Timer succesfully finished')
  }

  remainTime = convertMs(chosenTime - Date.now())
  const { days, hours, minutes, seconds } = remainTime;
  selectors.days.innerHTML = addLeadingZero(days);
  selectors.hours.innerHTML = addLeadingZero(hours);
  selectors.minutes.innerHTML = addLeadingZero(minutes);
  selectors.seconds.innerHTML = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return `${value.toString().padStart(2, '0')}`;
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
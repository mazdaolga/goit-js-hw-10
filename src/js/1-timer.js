
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import '../css/1-timer.css';

const refs = {
  datetimePicker: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
}

let initTime;
refs.startBtn.disabled = true;
let timerInterval = null;

refs.startBtn.addEventListener('click', () => {
  refs.startBtn.disabled = true;
  refs.datetimePicker.disabled = true;

  timerInterval = setInterval(() => {
    const diff = initTime - Date.now();
    if (diff <= 0) {
      clearInterval(timerInterval);
      refs.datetimePicker.disabled = false;
      renderTime(0);
      return;
    }
    renderTime(diff);
  }, 1000);
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function renderTime(ms) {
  const time = convertMs(ms);
  refs.daysEl.innerText = String(time.days).padStart(2, '0');
  refs.hoursEl.innerText = String(time.hours).padStart(2, '0');
  refs.minutesEl.innerText = String(time.minutes).padStart(2, '0');
  refs.secondsEl.innerText = String(time.seconds).padStart(2, '0');
}

function validateTime(time) {
  return time <= Date.now();
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    initTime = selectedDates[0];
    if (validateTime(initTime)) {
      iziToast.error({
        position: 'topRight',
        title: 'Error',
        message: "Please choose a date in the future",
      });
      refs.startBtn.disabled = true;
    } else {
      renderTime(initTime - Date.now());
      refs.startBtn.disabled = false;
    }
  },
};

flatpickr(refs.datetimePicker, options);










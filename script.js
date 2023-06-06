let startBtn = document.querySelector('#start').addEventListener ('click', toStart,);
let pauseBtn = document.querySelector('#pause').addEventListener ('click', toPause);
let stopBtn = document.querySelector('#stop').addEventListener ('click', toStop);

let hour = 0;
let min = 0;
let sec = 0;
let ms = 0;
const time = 10;
let stopwatchActivity = 'none';
let stopwatch;


function toStart() {
  if (stopwatchActivity == 'none') {
    stopwatch = setInterval(() => { timer() }, time);
    stopwatchActivity = 'active';
  } else {}
}

function toPause() {
  clearInterval(stopwatch);
  stopwatchActivity = 'none';
}

function toStop() {
  stopwatchActivity = 'none';
  clearInterval(stopwatch);
  hour = 0;
  min = 0;
  sec = 0;
  ms = 0
  document.querySelector('#timer').innerHTML = '00:00:00<span id="millisecond">:00</span>';
}

function timer() {
  ms++;

  if (ms == 100) { ms = 0; sec++ }
  
  if (sec == 60) { sec = 0; min++; }

  if (min == 60) { min = 0; hour++; }

  let visualTimer = `${(hour < 10 ? `0${hour}` : hour)}:${(min < 10 ? `0${min}` : min)}:${(sec < 10 ? `0${sec}` : sec)}<span id="millisecond">:${ms < 10 ? `0${ms}` : ms}</span>`;
  document.querySelector('#timer').innerHTML = visualTimer;
}
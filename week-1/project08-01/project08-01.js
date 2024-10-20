"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Exenreco Bell
      Date:   October 10, 2024

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

/**
 * TIMER OBJECT
 *
 * A constrcut function that creates a new timer instance.
 *
 * @type Object
 *
 * @param number min - The number of minutes the timer instance has.
 *
 * @param number sec - The number of seconds the timer instance has.
 *
 * @returns void
 */
function timer(min = 0, sec = 0) {
  (this.minutes = min), (this.seconds = sec), (this.timeID = null);
}

/**
 * RUN PAUSE
 *
 * A method of the construct object that starts or pause
 * the timer object using set and clear intervals.
 *
 * @type Method
 *
 * @param object timer - The current instance of the timer object.
 *
 * @param number min - The number of minutes the timer instance has.
 *
 * @param number sec - The number of seconds the timer instance has.
 *
 * @returns void
 *
 */
timer.prototype.runPause = function (timer = {}, minBox = 0, secBox = 0) {
  if (
    timer &&
    typeof timer === "object" &&
    "timeID" in timer &&
    timer.timeID !== null
  ) {
    window.clearInterval(timer.timeID);
    timer.timeID = null;
  } else {
    timer.timeID = window.setInterval(countdown, 1000, timer);
  }
};

/**
 * COUNTDOWN
 *
 * An interval function used to update the value of the timer instance.
 *
 * @type Function
 *
 * @param object timer - The current instance of the timer object.
 *
 * @returns void
 */
function countdown(timer = {}) {
  if (timer && timer.seconds && timer.seconds > 0) {
    timer.seconds--;
  } else if (timer && timer.minutes && timer.minutes > 0) {
    timer.minutes--;
    timer.seconds = 59;
  } else {
    window.clearInterval(timer.timeID);
    timer.timeID = null;
  }

  (minBox.value = timer.minutes), (secBox.value = timer.seconds);
}

/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

// Instance of timer
const myTimer = new timer(minBox.value, secBox.value);

// Min Box event listener
minBox.addEventListener("change", (el) => (myTimer.minutes = el.target.value));

// Sec Box event listener
secBox.addEventListener("change", (el) => (myTimer.seconds = el.target.value));

// Pause timer on click event listener
runPauseTimer.addEventListener("click", () =>
  myTimer.runPause(myTimer, minBox.value, secBox.value)
);

const start = document.getElementById("start");
const reset = document.getElementById("reset");

const hour = document.getElementById("hour");
const minute = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

//store a refrence to a variable
const startimer = null;

// function timer() {
//     if(hour.value == 0 && minute.value == 0 && seconds.value == 0)
// }
function timer() {
  if (hour.value == 0 && minute.value == 0 && seconds.value == 0) {
    hour.value = 0;
    minute.value = 0;
    seconds.value = 0;
  } else if (seconds.value != 0) {
    seconds.value--;
  } else if (minute.value != 0 && seconds.value == 0) {
    seconds.value = 59;
    minute.value--;
  } else if (hour.value != 0 && minute.value == 0) {
    minute.value = 60;
    hour.value--;
  }
  return;
}

function stoptimer() {
  clearInterval(startimer);
}

start.addEventListener("click", function () {
  function startinterval() {
    startinterval = setInterval(function () {
      timer();
    }, 1000);
  }
  startinterval();
});

reset.addEventListener("click", function () {
  hour.value = 0;
  minute.value = 0;
  seconds.value = 0;
  stoptimer();
});

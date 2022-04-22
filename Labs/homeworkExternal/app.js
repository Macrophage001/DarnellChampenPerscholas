// when the document is loaded, trigger the "documentLoaded" function
window.addEventListener('DOMContentLoaded', documentLoaded, false);

var startTime;
var limite;
var temporizador;

function documentLoaded() {
  "use strict";

  // listen for mouse clicks on the button
  // document.getElementById("btnStart").addEventListener("click", botaoClicked, false);
  document.getElementById("clockBtn").addEventListener("click", botaoClicked, false);
  console.log("Documento carregado");
}

// when we click on the button, we save the current time, and the time limit. We then
// create a timer to execute the "updateTime" function once a second.
function botaoClicked() {
  "use strict";

  let minutes = Math.floor(document.getElementById('clock-minute').value);
  let seconds = Math.floor(document.getElementById('clock-seconds').value);

  startTime = new Date();

  limite = parseInt(document.getElementById("txtTempo").value);

  let requiredElapsedTime = minutes * 60 + seconds; // In Seconds;

  document.getElementById('clock-minute').value = '';
  document.getElementById('clock-seconds').value = '';

  // clearInterval(temporizador);
  temporizador = setInterval(() => updateTime(requiredElapsedTime), 1000);
}

function updateTime(requiredElapsedTime) {
  "use strict";

  // read the current time
  var currentTime = new Date();

  // calculate how many seconds passed since the start of the timer
  var elapsed = (currentTime.getTime() - startTime.getTime()) / 1000;

  // convert seconds to minutes and seconds (below 60)
  var minutos = Math.floor(elapsed / 60);
  var segundos = Math.floor(elapsed % 60);

  // pad with zeroes on the left to look better
  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  // show the elapsed time
  // document.getElementById("clock").value = minutos + ":" + segundos;
  document.getElementById("clock-minute").value = minutos;
  document.getElementById("clock-seconds").value = segundos;

  // check if we are above the time limit and set the color of the timer accordingly
  console.log('Elapsed: ' + elapsed);
  console.log('Required Elapsed Time: ' + requiredElapsedTime);
  if (elapsed > requiredElapsedTime) {
    // document.getElementById("clock").className = "red";
    document.getElementById("clock-minute").value = '';
    document.getElementById("clock-seconds").value = '';
    clearInterval(temporizador);
  } 
  // else {
  //   document.getElementById("clock").className = "blue";
  // }
}



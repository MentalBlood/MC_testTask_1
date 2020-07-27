const timeObject = document.querySelector('.time');
timeObject.innerText = '0.00';

let intervalId = undefined;
let startTime = undefined;
function start() {
    startTime = Date.now() - Number.parseFloat(timeObject.innerText) * 1000;
    intervalId = setInterval(() => {
        const currentTime = Date.now();
        timeObject.innerText = ((currentTime - startTime) / 1000).toFixed(2);
    }, 10);
}
function pause() {
    clearInterval(intervalId);
}
function stop() {
    clearInterval(intervalId);
    timeObject.innerText = '0.00';
}

const startButton = document.querySelector('.startButton');
startButton.onclick = start;
const pauseButton = document.querySelector('.pauseButton');
pauseButton.onclick = pause;
const stopButton = document.querySelector('.stopButton');
stopButton.onclick = stop;

start();
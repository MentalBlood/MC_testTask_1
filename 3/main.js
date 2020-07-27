const timeObject = document.querySelector('.time');

let intervalId = undefined;
let startTime = undefined;
function start() {
    startTime = new Date();
    intervalId = setInterval(() => {
        const currentTime = new Date();
        timeObject.innerText = ((currentTime - startTime) / 1000).toFixed(2);
    }, 10);
}
function stop() {
    clearInterval(intervalId);
    timeObject.innerText = '0.00';
}

const startButton = document.querySelector('.startButton');
startButton.onclick = start;
const stopButton = document.querySelector('.stopButton');
stopButton.onclick = stop;

start();
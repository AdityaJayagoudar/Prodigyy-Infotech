let timerInterval;
let seconds = 0;
let running = false;

const display = document.getElementById('display');
const lapList = document.getElementById('lapList');

function updateDisplay() {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}

document.getElementById('start').addEventListener('click', () => {
    if (!running) {
        running = true;
        timerInterval = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
});

document.getElementById('pause').addEventListener('click', () => {
    running = false;
    clearInterval(timerInterval);
});

document.getElementById('reset').addEventListener('click', () => {
    running = false;
    clearInterval(timerInterval);
    seconds = 0;
    updateDisplay();
    lapList.innerHTML = ''; // Clear lap times
});

document.getElementById('lap').addEventListener('click', () => {
    if (running) {
        const lapTime = document.createElement('li');
        lapTime.className = 'lap';
        lapTime.textContent = display.textContent;
        lapList.appendChild(lapTime);
    }
});

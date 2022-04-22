const colors = ['ffebcd', '11151C', '212D40', '364156', '7D4E57', 'D66853'];

const timerInput        = document.querySelector('#timer-input');
const timerCounter      = document.querySelector('#timer-text');
const inlineMinuteInput = document.querySelector('#inline-minute');
const inlineSecondInput = document.querySelector('#inline-seconds');

const isColorChangeActive = true;

let seconds = 0;
let minutes = 0;

const changeColor = (element) => {
    if (isColorChangeActive && ( document.activeElement !== inlineMinuteInput && document.activeElement !== inlineSecondInput )) {
        let randomIndex = Math.ceil(Math.random() * 5) - 1;
        element.style.backgroundColor = `#${colors[randomIndex]}`;
    }
}

let timerInterval;

const startTimer = () => {
    if (inlineMinuteInput === document.activeElement) {
        let tempMinutes = Math.floor(inlineMinuteInput.value);
        inlineSecondInput.focus();
        inlineMinuteInput.value = (tempMinutes < 10 
            ? `0${tempMinutes}`
            : tempMinutes);
    }
    else
    {
        let requiredMinutes = Math.floor(inlineMinuteInput.value);
        let requiredSeconds = Math.floor(inlineSecondInput.value);
        let requiredTimeElapsed = requiredMinutes * 60 + requiredSeconds;
        
        resetTimer();
        seconds = 0;
        minutes = 0;

        timerInterval = setInterval(() => updateTimer(requiredTimeElapsed), 1000);
    }
}

const resetTimer = () => {
    inlineMinuteInput.value = '00';
    inlineSecondInput.value = '00';
}
const stopTimer = () => {
    clearInterval(timerInterval);
    resetTimer();
}

const updateTimer = (requiredTimeElapsed) => {
    let totalTimeElapsed = seconds + minutes * 60;
    if (totalTimeElapsed > requiredTimeElapsed) {
        stopTimer();
        seconds = 0;
        minutes = 0;
    }

    if (seconds > 60) {
        minutes++
        seconds = 0;
    }
    else {
        seconds++;
    }

    inlineMinuteInput.value = minutes < 10 ? `0${minutes}` : minutes;
    inlineSecondInput.value = seconds < 10 ? `0${seconds}` : seconds;
}
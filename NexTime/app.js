var btnReset = document.getElementById('reset');
var btnStart = document.getElementById('start');
var btnPause = document.getElementById('pause');
var btnContinue = document.getElementById('continue');
var timeDisplay = document.getElementById('time');
var btnRecord = document.getElementById('record');
var recordTime = document.getElementById('recordTime');
let minute = 0, hundredth = 0, hundredthSecond = 0, cont = 1;
let record;
const showTime = () => {
    const min = String(minute).padStart(2,'0');
    const seg = String(hundredthSecond.toFixed(2));
    timeDisplay.textContent = `${min}:${seg}`;
}
const startStopwatch = () => {
    interval = setInterval(() => {
        hundredthSecond = hundredth++ / 60;
        if (hundredthSecond == 100) {
                hundredth = 0;
                minute++;
        }
        if (minute == 100) {
                minute = 0;
                second = 0;
                hundredth = 0;
        }
        showTime();
    }, 10);
    btnPause.style.display = "inline-flex";
    btnStart.style.display = "none";
           
}
const pauseStopwatch = () => {
    clearInterval(interval);
        btnContinue.style.display = "inline-flex";
        btnReset.style.display = "inline-flex";
        btnPause.style.display = "none";
        btnRecord.style.display = "none";
    }
const continueStopwatch = () => {
    startStopwatch();
    btnPause.style.display = "inline-flex";
    btnContinue.style.display = "none";
    btnReset.style.display = "none";
    btnRecord.style.display = "inline-flex";
}
const resetStopwatch = () => {
    minute = 0; 
    hundredth = 0;
    cont = 1;
    clearInterval(interval);
    btnStart.style.display = "inline-flex";
    timeDisplay.textContent = "00:0.00";
    btnContinue.style.display = "none";
    btnReset.style.display = "none";
    btnPause.style.display = "none";
    btnRecord.style.display = "inline-flex";
    recordTime.innerHTML = "";
    recordTime.style.display = "none";
}
const recordStopwatch = () => {
    recordTime.style.display = "block";
    record = timeDisplay.textContent;
    recordTime.innerHTML = `<p class="record">${cont++} - ${record}</p>` + recordTime.innerHTML;
    //recordTime.innerHTML += `<p class="record">${cont++} - ${record}</p>`;
    if (record == 0) {
        btnRecord.disabled = 'true';
    }
    if (cont == 10) {
        recordTime.style.maxHeight = "140px";
        recordTime.style.overflow = "auto";
    }
}
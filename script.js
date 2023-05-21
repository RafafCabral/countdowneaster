const  daysEl = document.getElementById('days');
const  hoursEl = document.getElementById('hours');
const  minutesEl = document.getElementById('minutes');
const  secondsEl = document.getElementById('seconds');

const easter = "31 Mar 2024";

function countdown () {
    const newEasterDate = new Date (easter);
    const currentDate = new Date ();

    const totalSeconds = (newEasterDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds /3600 / 24);
    const hours = Math.floor(totalSeconds /3600) % 24 ;
    const minutes = Math.floor(totalSeconds /60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds); 
}

function formatTime (time) {
    return time < 10 ? (`0${time}`) : time;
}

console.log(easter);

countdown();

setInterval(countdown,1000);
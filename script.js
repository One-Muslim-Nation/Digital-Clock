const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const period = document.getElementById("period");

const clock = setInterval(function time() {
    const dateNow = new Date();
    let hr = dateNow.getHours();
    let min = dateNow.getMinutes();
    let sec = dateNow.getSeconds();
    let amPm = 'AM';

    if (hr >= 12) {
        amPm = 'PM';
        if (hr > 12) hr -= 12;
    } else if (hr === 0) {
        hr = 12;
    }

    hr = hr.toString().padStart(2, "0");
    min = min.toString().padStart(2, "0");
    sec = sec.toString().padStart(2, "0");

    hour.textContent = hr;
    minute.textContent = min;
    second.textContent = sec;
    period.textContent = amPm;
}, 1000);

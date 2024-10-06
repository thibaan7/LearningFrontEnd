let hours = 0;
let mins = 0;
let secs = 0;
let milis = 0;
let interval = 0;
let isRunning = false;

function updateTime() {
    milis += 10; // Add 10ms

    if (milis >= 1000) {
        milis = 0;
        secs++;
    }

    if (secs >= 60) {
        secs = 0;
        mins++;
    }

    if (mins >= 60) {
        mins = 0;
        hours++;
    }

    // Format time with leading zeros
    let formattedHours = hours.toString().padStart(2, '0');
    let formattedMinutes = mins.toString().padStart(2, '0');
    let formattedSeconds = secs.toString().padStart(2, '0');
    let formattedMilliseconds = Math.floor(milis / 10).toString().padStart(2, '0');

    // Update the timer display
    document.getElementById("timer").textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;

    if (secs >= 5 && secs <= 10) {
        document.getElementById("h1").textContent = "Punde";
    } else {
        document.getElementById("h1").textContent = "STOPWATCH";
    }
}
    

function start() {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(updateTime, 10); // Update every 10 milliseconds
    }
}

function stop() {
    clearInterval(interval);
    isRunning = false;
    document.getElementById("h1").textContent="STOPWATCH";


}

function reset() {
    clearInterval(interval);
    isRunning = false;
    milis = 0;
    mins = 0;
    secs = 0;
    hours = 0;
    document.getElementById("timer").textContent = "00:00:00:00"; // Reset display
    document.getElementById("h1").textContent="STOPWATCH";

}


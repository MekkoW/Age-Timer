document.addEventListener("DOMContentLoaded", function() {
    let birthday = new Date();
    let timerInterval;

    function updateAgeTimer() {
        birthday = new Date(document.getElementById("birthday").value);
        const currentTime = new Date();
        const ageInSeconds = (currentTime - birthday) / 1000;
        const ageInMilliseconds = ageInSeconds * 100;

        // Update the timer with 1/10 millisecond precision
        document.getElementById("age-timer").textContent = ageInMilliseconds.toFixed(8);
    }

    function startTimer() {
        updateAgeTimer(); // Initial update
        timerInterval = setInterval(updateAgeTimer, 100);
        document.getElementById("age-timer").textContent = "Timer started!";
    }

    // Expose the startTimer function to the global scope
    window.startTimer = startTimer;
});

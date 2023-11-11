document.addEventListener("DOMContentLoaded", function() {
    let birthday = new Date();

    function updateAgeTimer() {
        birthday = new Date(document.getElementById("birthday").value);
        const currentTime = new Date();
        const ageInSeconds = (currentTime - birthday) / 1000;
        const ageInMilliseconds = ageInSeconds * 100;

        // Update the timer with 1/10 millisecond precision
        document.getElementById("age-timer").textContent = ageInMilliseconds.toFixed(8);
    }

    // Initial update
    updateAgeTimer();
});

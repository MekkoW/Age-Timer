document.addEventListener("DOMContentLoaded", function() {
    let birthday;
    let timerInterval;

    function updateAgeTimer() {
        const currentTime = new Date();
        const ageInSeconds = (currentTime - birthday) / 1000;
        const age = (ageInSeconds / 31536000).toFixed(0); // 1 year = 31536000 seconds
        const decimals = (ageInSeconds % 31536000).toFixed(9).substring(1); // Remove the leading dot if any

        // Update the timer display
        document.getElementById("age-display").innerHTML = `Current Age: <span>${age}</span>${decimals !== '000000000' ? '.' + decimals : ''}`;
    }

    function startTimer() {
        const selectedDate = document.getElementById("birthday").value;
        if (!selectedDate) {
            alert("Please select your birthday first.");
            return;
        }

        birthday = new Date(selectedDate);
        updateAgeTimer(); // Initial update
        timerInterval = setInterval(updateAgeTimer, 100);
        document.getElementById("age-display").innerHTML = "Timer started!";
    }

    // Expose the startTimer function to the global scope
    window.startTimer = startTimer;
});

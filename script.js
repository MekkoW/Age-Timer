document.addEventListener("DOMContentLoaded", function() {
    let birthday;
    let timerInterval;

    function updateAgeTimer() {
        const currentTime = new Date();
        const ageInSeconds = (currentTime - birthday) / 1000;
        const age = Math.floor(ageInSeconds); // Extract the whole number part
        const decimals = (ageInSeconds % 1).toFixed(8).substring(2); // Extract the decimal part

        // Update the timer display
        document.getElementById("age-display").innerHTML = `Current Age: <span>${age}</span>.<small>${decimals}</small>`;
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

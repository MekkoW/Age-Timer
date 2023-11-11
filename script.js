document.addEventListener("DOMContentLoaded", function() {
    let birthday;
    let timerInterval;

    function updateAgeTimer() {
        const currentTime = new Date();
        const ageInSeconds = (currentTime - birthday) / 1000;
        const age = Math.floor(ageInSeconds / 31536000); // 1 year = 31536000 seconds
        const decimalPart = ('000000000' + (ageInSeconds % 31536000).toFixed(9)).slice(-9).replace(/\.?0+$/, ''); // Extract and format the decimal part

        // Update the timer display
        document.getElementById("age-display").innerHTML = `Current Age: <span>${age}.${decimalPart}</span>`;
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

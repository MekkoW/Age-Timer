document.addEventListener("DOMContentLoaded", function () {
  let birthday;
  let timerInterval;

  function updateAgeTimer() {
    const currentTime = new Date();
    const ageInSeconds = (currentTime - birthday) / 1000;
    const age = Math.floor(ageInSeconds / 31536000); // 1 year = 31536000 seconds
    const decimalPart = formatDecimalPart(ageInSeconds % 1);

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

  function formatDecimalPart(decimal) {
    const decimalString = decimal.toFixed(9).substring(2);
    let trimmedDecimal = decimalString.replace(/0+$/, '');

    // Ensure there's at least one digit after the decimal point
    if (trimmedDecimal === '') {
      trimmedDecimal = '0';
    }

    return trimmedDecimal;
  }

  // Expose the startTimer function to the global scope
  window.startTimer = startTimer;
});

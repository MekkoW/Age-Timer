function displayTimer() {
  const resultDiv = document.getElementById('result');

  function updateAge() {
    const birthdate = new Date(localStorage.getItem('birthdate'));
    const currentDate = new Date();

    const ageInMilliseconds = currentDate - birthdate;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;
    const ageInYears = ageInDays / 365.25;

    const formattedAge = new Intl.NumberFormat('en-US', { maximumFractionDigits: 9 }).format(ageInYears);
    resultDiv.innerHTML = `Your age is approximately ${formattedAge} years.`;
  }

  // Call the updateAge function immediately to display the initial age.
  updateAge();

  // Set up an interval to update the age every second.
  setInterval(updateAge, 1000);
}

function goBack() {
  window.location.href = 'index.html';
}

// Call the function when the timer page loads.
displayTimer();

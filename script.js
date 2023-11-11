// script.js

function startAgeTimer() {
  const birthdateInput = document.getElementById('birthdate');

  // Store birthdate in local storage for access in the timer page.
  localStorage.setItem('birthdate', birthdateInput.value);

  // Redirect to the timer page.
  window.location.href = 'index.html#timer';
}

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

  // Set up an interval to update the age every 10 milliseconds.
  setInterval(updateAge, 10);
}

function goBack() {
  window.location.href = 'index.html';
}

// Check if the page should display the timer immediately.
if (window.location.hash === '#timer') {
  displayTimer();
}

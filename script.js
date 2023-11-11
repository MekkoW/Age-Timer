function startTimer() {
  const birthdateInput = document.getElementById('birthdate');
  const resultDiv = document.getElementById('result');
  const calculatorDiv = document.getElementById('ageCalculator');

  const birthdate = new Date(birthdateInput.value);
  const currentDate = new Date();

  calculatorDiv.style.display = 'none'; // Hide the calculator section

  function updateAge() {
    const ageInMilliseconds = currentDate - birthdate;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;
    const ageInYears = ageInDays / 365.25;

    const formattedAge = new Intl.NumberFormat('en-US', { maximumFractionDigits: 6 }).format(ageInYears);
    resultDiv.innerHTML = `Your age is approximately ${formattedAge} years.`;
  }

  // Call the updateAge function immediately to display the initial age.
  updateAge();

  // Set up an interval to update the age every 1000 milliseconds (1 second).
  setInterval(updateAge, 1000);
}

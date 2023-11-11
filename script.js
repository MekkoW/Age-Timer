function calculateAge() {
  const birthdateInput = document.getElementById('birthdate');
  const resultDiv = document.getElementById('result');

  const birthdate = new Date(birthdateInput.value);
  const currentDate = new Date();

  const ageInMilliseconds = currentDate - birthdate;
  const ageInSeconds = ageInMilliseconds / 1000;
  const ageInMinutes = ageInSeconds / 60;
  const ageInHours = ageInMinutes / 60;
  const ageInDays = ageInHours / 24;
  const ageInYears = ageInDays / 365.25;

  const formattedAge = new Intl.NumberFormat('en-US', { maximumFractionDigits: 6 }).format(ageInYears);

  resultDiv.innerHTML = `Your age is approximately ${formattedAge} years.`;

  setInterval(() => {
    const updatedAge = new Intl.NumberFormat('en-US', { maximumFractionDigits: 6 }).format(ageInYears + ((Date.now() - currentDate) / 1000 / 60 / 60 / 24 / 365.25));
    resultDiv.innerHTML = `Your age is approximately ${updatedAge} years.`;
  }, 1000);
}

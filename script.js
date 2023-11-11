function calculateAge() {
  const birthdateInput = document.getElementById('birthdate');

  // Store birthdate in local storage for access in the timer page.
  localStorage.setItem('birthdate', birthdateInput.value);

  // Redirect to the timer page.
  window.location.href = 'timer.html';
}

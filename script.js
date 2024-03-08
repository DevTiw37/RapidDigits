const randomNumberDisplay = document.getElementById('random-number');

function generateRandomNumber() {
  return String(Math.floor(Math.random() * 10000)).padStart(4, '0');
}

function updateNumber() {
  const newNumber = generateRandomNumber();
  randomNumberDisplay.textContent = newNumber;
}

setInterval(updateNumber, 1500); // Update every second

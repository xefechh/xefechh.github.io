const wapp = window.Telegram.WebApp;

wapp.expand(); // Expand the web app

const budget = document.querySelector('.budget');
let score = 0;

// Load user data when the app starts
window.addEventListener('DOMContentLoaded', loadUserData);

document.body.addEventListener('pointerdown', (event) => {
  if (!event.target.closest('.card, .data, .progressbar, .navbar')) {
    score++;
    budget.innerHTML = `<i class='bx bx-dollar'></i>${score}`;
    updateProgressBar();
    saveUserData(); // Save data after updating the score
  }
});

function updateProgressBar() {
  const progressBar = document.querySelector('.progress');
  const nextLevelValue = parseInt(document.querySelector('.next-level').textContent);

  // Calculate the progress (assuming the value is a number)
  const progress = (score / nextLevelValue) * 100;

  // Update the progress bar's width
  progressBar.style.width = `${progress}%`;
}

function saveUserData() {
  // Use Telegram WebApp CloudStorage to save data
  const userId = wapp.initDataUnsafe.user.id; // Get user ID from Telegram
  const data = {
    budget: score,
    level: document.querySelector('.level-value').textContent, // Assume you have a level element
    cardNumber: document.querySelector('.card-number').textContent // Assume you have a card number element
  };

  // Save data as a JSON string in CloudStorage
  wapp.CloudStorage.setItem(`user_${userId}_data`, JSON.stringify(data), (error, success) => {
    if (error) {
      console.error("Error saving data:", error);
    } else if (success) {
      console.log("User data saved successfully");
    }
  });
}

function loadUserData() {
  // Retrieve data from Telegram WebApp CloudStorage
  const userId = wapp.initDataUnsafe.user.id; // Get user ID from Telegram

  wapp.CloudStorage.getItem(`user_${userId}_data`, (error, data) => {
    if (error) {
      console.error("Error retrieving data:", error);
    } else if (data) {
      const userData = JSON.parse(data);
      score = userData.budget;
      document.querySelector('.budget').innerHTML = `<i class='bx bx-dollar'></i>${score}`;
      document.querySelector('.level-value').textContent = userData.level;
      document.querySelector('.card-number').textContent = userData.cardNumber;
      updateProgressBar(); // Update progress bar based on loaded data
    }
  });
}

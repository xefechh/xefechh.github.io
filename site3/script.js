const wapp = window.Telegram.WebApp;

wapp.expand(); // Expand the web app

const budget = document.querySelector('.budget');
let score = 0;

// Loading screen element
const loader = document.querySelector('.loader');

// Show loader
function showLoader() {
  loader.style.display = 'flex';
}

// Hide loader
function hideLoader() {
  loader.style.display = 'none';
}

// Load user data when the app starts
window.addEventListener('DOMContentLoaded', loadUserData);

document.body.addEventListener('pointerdown', (event) => {
  if (!event.target.closest('.card, .data, .progressbar, .navbar')) {
    score++;
    budget.innerHTML = `<i class='bx bx-dollar'></i>${score}`;
    updateProgressBar();
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
  showLoader(); // Show loader before saving data

  // Use Telegram WebApp CloudStorage to save data
  const userId = wapp.initDataUnsafe.user.id; // Get user ID from Telegram
  const data = {
    budget: score,
    level: document.querySelector('.level-value').textContent, // Assume you have a level element
    cardNumber: document.querySelector('.card-number').textContent // Assume you have a card number element
  };

  // Save data as a JSON string in CloudStorage
  wapp.CloudStorage.setItem(`user_${userId}_data`, JSON.stringify(data), (error, success) => {
    hideLoader(); // Hide loader after saving data

    if (error) {
      console.error("Error saving data:", error);
    } else if (success) {
      console.log("User data saved successfully");
    }
  });
}

function loadUserData() {
  showLoader(); // Show loader before loading data

  // Retrieve data from Telegram WebApp CloudStorage
  const userId = wapp.initDataUnsafe.user.id; // Get user ID from Telegram

  wapp.CloudStorage.getItem(`user_${userId}_data`, (error, data) => {
    hideLoader(); // Hide loader after loading data

    if (error) {
      console.error("Error retrieving data:", error);
    } else if (data) {
      const userData = JSON.parse(data);
      score = userData.budget;
      budget.innerHTML = `<i class='bx bx-dollar'></i>${score}`;
      document.querySelector('.level-value').textContent = userData.level;
      document.querySelector('.card-number').textContent = userData.cardNumber;
      updateProgressBar(); // Update progress bar based on loaded data
    }
  });
}

// Automatically save user data every 5 seconds
setInterval(saveUserData, 5000); // 5000 milliseconds = 5 seconds

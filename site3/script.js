window.Telegram.WebApp.expand();

const budget = document.querySelector('.budget');
let score = 0;

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

if (window.location.pathname.endsWith('index.html')) {
  Telegram.WebApp.BackButton.hide(); // Ensure the back button is hidden
  Telegram.WebApp.MainButton.setText('Close');
  Telegram.WebApp.MainButton.show();
  Telegram.WebApp.MainButton.onClick(() => {
    Telegram.WebApp.close(); // Closes the web app
  });
} else {
  Telegram.WebApp.MainButton.hide(); // Ensure the main button is hidden
  Telegram.WebApp.BackButton.show(); // Show the back button on other pages
  Telegram.WebApp.BackButton.onClick(() => {
    window.location.href = 'index.html';
  });
}
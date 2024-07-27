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

if (window.location.pathname !== '/index.html') {
  // Show the back button
  Telegram.WebApp.BackButton.show();
  Telegram.WebApp.BackButton.onClick(() => {
    // Navigate back to the index page
    window.location.href = 'index.html';
  });
} else {
  // Hide the back button on the index page
  Telegram.WebApp.BackButton.hide();
}
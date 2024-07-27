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

if (window.location.pathname === '/index.html') {
  Telegram.WebApp.BackButton.set({
    text: 'Close',
    onClick: () => {
      Telegram.WebApp.close();
    }
  });
} else {
  Telegram.WebApp.BackButton.show();
  Telegram.WebApp.BackButton.onClick(() => {
    window.location.href = 'index.html';
  });
}
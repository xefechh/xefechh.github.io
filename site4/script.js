const wapp = window.Telegram.WebApp;
wapp.expand();

const budget = document.querySelector('.budget');

let score = 0;
let pertap = document.querySelector('.pertap');
let perhour = document.querySelector('.perhour');

document.body.addEventListener('pointerdown', (event) => {
  if (!event.target.matches('.card, .data, .progressbar, .navbar')) {
    score++;
    budget.innerHTML = `<i class='bx bx-dollar'></i>${score}`;
    updateProgressBar();
  }
});

function updateProgressBar() {
  const progressBar = document.querySelector('.progress');
  const nextLevelValue = parseInt(document.querySelector('.next-level').textContent);
  const progress = (score / nextLevelValue) * 100;
  progressBar.style.width = `${progress}%`;
}
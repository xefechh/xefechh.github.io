window.Telegram.WebApp.expand();

const budget = document.querySelector('.budget');
let score = 0;

document.body.addEventListener('pointerdown', (event) => {
  if (!event.target.closest('.card, .data, .progressbar')) {
    score++;
    budget.innerHTML = `<i class='bx bx-dollar'></i>${score}`;
  }
});
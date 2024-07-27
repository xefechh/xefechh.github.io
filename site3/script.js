const wapp = window.Telegram.WebApp;
wapp.expand();

const budget = document.querySelector('.budget');

let score = 0;
let pertap = document.querySelector('.pertap');
let perhour = document.querySelector('.perhour');

document.body.addEventListener('pointerdown', (event) => {
  if (event.target.matches('.coin')) {
    score++;
    budget.innerHTML = `<i class='bx bx-dollar'></i>${score}`;
    updateProgressBar();
  }
});


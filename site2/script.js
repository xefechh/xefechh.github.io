window.Telegram.WebApp.expand();

const click_area = document.querySelector('.screen');
const card_area = document.querySelector('.card');
const money = document.getElementById('money');
let score = 0;
card_area.addEventListener('click', (event) => {
    event.stopPropagation();
});

click_area.addEventListener('click', () => {
    score++;
    money.innerHTML = `${score}`;
});

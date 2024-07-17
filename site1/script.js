window.Telegram.WebApp.expand();

document.addEventListener('DOMContentLoaded', (event) => {
    let score = 0;

    const scoreDisplay = document.getElementById('score');
    const clickButton = document.getElementById('main-coin')

    clickButton.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = `${score}`;
    });
});

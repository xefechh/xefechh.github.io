window.Telegram.WebApp.expand();

document.addEventListener('DOMContentLoaded', (event) => {
    let score = 0;

    const scoreDisplay = document.getElementById('score');
    const clickButton = document.getElementById('main_click_button');

    clickButton.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = `Score: ${score}cc`;
    });
});

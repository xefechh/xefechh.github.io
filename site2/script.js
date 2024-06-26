window.Telegram.WebApp.expand();

const screen = document.querySelector('.screen');
const green = document.querySelector('.data-field');

green.addEventListener('click', (event) => {
    event.stopPropagation();
});

screen.addEventListener('click', () => {
    console.log("Click")
});

    
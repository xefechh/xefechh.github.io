window.Telegram.WebApp.expand();

const click_area = document.querySelector('.screen');
const card_area = document.querySelector('.card');
const money = document.getElementById('money');

card_area.addEventListener('click', (event) => {
    event.stopPropagation();
});

screen.addEventListener('click', () => {
    console.log("Click")
});




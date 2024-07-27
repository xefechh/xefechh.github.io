const wapp = window.Telegram.WebApp;
wapp.expand();  

setTimeout(() => {
    window.location.href = 'home.html'; // Redirect to home.html
}, 3000); // 3000 milliseconds = 3 seconds
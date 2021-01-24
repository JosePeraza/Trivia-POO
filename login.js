const alreadyLoggedIn = localStorage.getItem('loggedIn');
if(alreadyLoggedIn) {
    window.location.replace("/dashboard.html");
}

const users = JSON.parse(localStorage.getItem('users')) || [];

function login() {
    const email = document.getElementById('email-login').value;
    const password = document.getElementById('password-login').value;

    const user = users.find((user) => user.email === email && user.password === password);

    if(user) {
        localStorage.setItem('loggedIn', 'true');
        window.location.replace("/dashboard.html");
    }
    else {
        alert('usuario y contraseña incorrectos')
    }
}
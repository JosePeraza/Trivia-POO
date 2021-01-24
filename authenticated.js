const alreadyLoggedIn = localStorage.getItem('loggedIn');
if(!alreadyLoggedIn) {
    window.location.replace("/login.html");
}
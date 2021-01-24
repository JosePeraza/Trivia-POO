const users = JSON.parse(localStorage.getItem('users')) || [];

function addUser() {
    //Obtener el valor del input
    //agregar el usuario al arreglo

    const inputEmail = document.getElementById('email-signup');
    const email = inputEmail.value;
    const inputPassword = document.getElementById('password-signup');
    const password = inputPassword.value;

    let id = 1;
    if(users.length > 0) {
        id = users[users.length - 1].id + 1;
    }

    const newUser = {
        id: id,
        email: email,
        password: password
    }
    users.push(newUser);
    console.log(users);
    localStorage.setItem('users', JSON.stringify(users));

    //Limpiamos el formulario al darle push
    document.getElementById('form-cars').reset();
}
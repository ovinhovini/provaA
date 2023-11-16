let loginUsername = 'user';
let loginPassword = 'senha';

function checkLogin() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if (username === loginUsername && password === loginPassword) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('forgotPassword').style.display = 'none';
    } else {
        document.getElementById('error').textContent = 'usuário ou senha incorretos.';
    }
}

function logout() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('login').style.display = 'block';
    document.getElementById('forgotPassword').style.display = 'none';
    document.getElementById('error').textContent = '';
}

function forgotPassword() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('login').style.display = 'none';
    document.getElementById('forgotPassword').style.display = 'block';
}

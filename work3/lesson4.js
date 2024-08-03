// Задание 4
// Создать интерактивную веб-страницу, которая позволяет пользователям регистрироваться и входить в
// систему, используя данные, сохраненные в LocalStorage.
// Приложение будет состоять из трёх основных страниц:
// 1. Страница регистрации:
// ○ Предлагает пользователю ввести логин и пароль.
// ○ После ввода данных, они сохраняются в LocalStorage.
// ○ Пользователь перенаправляется на страницу входа.
// 2. Страница входа:
// ○ Предлагает пользователю ввести логин и пароль.
// ○ Если введенные данные совпадают с данными из LocalStorage, пользователь перенаправляется
// на страницу приветствия.
// ○ Если данные не совпадают, выводится сообщение об ошибке.
// 3. Страница приветствия:
// ○ Простое приветственное сообщение для авторизованного пользователя.
// ○ Кнопка "Выйти", при нажатии на которую пользователь возвращается на страницу входа.

// Селекторы
const registerPage = document.getElementById('register-page');
const loginPage = document.getElementById('login-page');
const welcomePage = document.getElementById('welcome-page');
const registerUsername = document.getElementById('register-username');
const registerPassword = document.getElementById('register-password');
const registerButton = document.getElementById('register-button');
const loginUsername = document.getElementById('login-username');
const loginPassword = document.getElementById('login-password');
const loginButton = document.getElementById('login-button');
const loginError = document.getElementById('login-error');
const welcomeUsername = document.getElementById('welcome-username');
const logoutButton = document.getElementById('logout-button');

// Проверка, если пользователь уже авторизован
const loggedInUser = localStorage.getItem('loggedInUser');
if (loggedInUser) {
  showWelcomePage(JSON.parse(loggedInUser));
} else {
  showRegisterPage();
}

// Функциональность регистрации
registerButton.addEventListener('click', () => {
  const username = registerUsername.value;
  const password = registerPassword.value;
  if (username && password) {
    registerUser(username, password);
    showLoginPage();
  }
});

// Функциональность входа
loginButton.addEventListener('click', () => {
  const username = loginUsername.value;
  const password = loginPassword.value;
  const user = getUser(username);
  if (user && user.password === password) {
    showWelcomePage(user);
    localStorage.setItem('loggedInUser', JSON.stringify(user));
  } else {
    loginError.style.display = 'block';
  }
});

// Функциональность выхода
logoutButton.addEventListener('click', () => {
  localStorage.removeItem('loggedInUser');
  showLoginPage();
});

// Функция регистрации пользователя
function registerUser(username, password) {
  localStorage.setItem(username, JSON.stringify({ username, password }));
}

// Функция получения пользователя
function getUser(username) {
  const userString = localStorage.getItem(username);
  return userString ? JSON.parse(userString) : null;
}

// Функция отображения страницы регистрации
function showRegisterPage() {
  registerPage.style.display = 'block';
  loginPage.style.display = 'none';
  welcomePage.style.display = 'none';
}

// Функция отображения страницы входа
function showLoginPage() {
  registerPage.style.display = 'none';
  loginPage.style.display = 'block';
  welcomePage.style.display = 'none';
  loginError.style.display = 'none';
}

// Функция отображения страницы приветствия
function showWelcomePage(user) {
  registerPage.style.display = 'none';
  loginPage.style.display = 'none';
  welcomePage.style.display = 'block';
  welcomeUsername.textContent = user.username;
}

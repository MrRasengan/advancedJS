// Задание 2
// Создать интерактивную веб-страницу, где пользователи могут вводить текст, сохранять его в localStorage,
// а затем загружать или удалять сохраненные данные.
// Разработка Интерфейса:
// Создать HTML-страницу с:
// ● Одним текстовым полем для ввода данных пользователем.
// ● Тремя кнопками: "Сохранить", "Загрузить" и "Очистить".
// ● Местом для отображения сохраненного текста.
// Программирование Логики на JavaScript:
// 1. При нажатии на "Сохранить", введенный текст должен сохраняться в localStorage.
// 2. При нажатии на "Загрузить", текст из localStorage должен отображаться на странице.
// 3. При нажатии на "Очистить", сохраненный текст должен быть удален из localStorage, и соответствующее
// сообщение отображается на странице.

const textInput = document.getElementById('textInput');
const saveButton = document.getElementById('saveButton');
const loadButton = document.getElementById('loadButton');
const clearButton = document.getElementById('clearButton');
const savedTextElement = document.getElementById('savedText');

// Загружаем сохраненный текст при загрузке страницы
loadSavedText();

// Обработка нажатия на кнопку "Сохранить"
saveButton.addEventListener('click', () => {
  const text = textInput.value;
  if (text.trim() !== '') {
    saveTextToLocalStorage(text);
    savedTextElement.textContent = `Saved text: ${text}`;
    textInput.value = '';
  }
});

// Обработка нажатия на кнопку "Загрузить"
loadButton.addEventListener('click', () => {
  loadSavedText();
});

// Обработка нажатия на кнопку "Очистить"
clearButton.addEventListener('click', () => {
  clearSavedText();
  savedTextElement.textContent = '';
});

// Функция для сохранения текста в localStorage
function saveTextToLocalStorage(text) {
  localStorage.setItem('savedText', text);
}

// Функция для загрузки сохраненного текста из localStorage
function loadSavedText() {
  const savedText = localStorage.getItem('savedText');
  if (savedText) {
    savedTextElement.textContent = `Saved text: ${savedText}`;
    textInput.value = savedText;
  } else {
    savedTextElement.textContent = 'No saved text.';
  }
}

// Функция для очистки сохраненного текста из localStorage
function clearSavedText() {
  localStorage.removeItem('savedText');
}

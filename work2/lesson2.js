// Пользователи вашего сайта могут добавлять элементы в список. Но есть условие:
// введенное значение должно содержать от 3 до 10 символов.
// 1. Создайте HTML-структуру с текстовым полем, кнопкой и списком.
// 2. Напишите функцию, которая будет добавлять элементы в список или
// генерировать исключение, если длина введенного значения не соответствует
// требованиям.

function addToList() {
  const inputField = document.getElementById('inputField');
  const value = inputField.value.trim();

  // Проверяем длину введенного значения
  if (value.length >= 3 && value.length <= 10) {
    // Добавляем элемент в список
    const listItem = document.createElement('li');
    listItem.textContent = value;
    document.getElementById('itemList').appendChild(listItem);

    // Очищаем текстовое поле
    inputField.value = '';
  } else {
    // Генерируем исключение, если длина введенного значения не соответствует требованиям
    throw new Error('Введенное значение должно содержать от 3 до 10 символов');
  }
}

try {
  addToList();
} catch (error) {
  alert(error.message);
}

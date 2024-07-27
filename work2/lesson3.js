// Задание 3
// Вы создаете интерфейс, где пользователь вводит число.
// Ваша задача — проверить, является ли введенное значение числом или нет, и дать
// соответствующий ответ.
// 1. Создайте HTML-структуру: текстовое поле для ввода числа и кнопку
// "Проверить".
// 2. Добавьте место (например, div) для вывода сообщения пользователю.
// 3. Напишите функцию, которая будет вызвана при нажатии на кнопку. Эта функция
// должна использовать try и catch для проверки вводимого значения.

function checkNumber() {
  const numberInput = document.getElementById('numberInput');
  const inputValue = numberInput.value.trim();
  const messageBox = document.getElementById('messageBox');

  try {
    // Проверяем, является ли введенное значение числом
    const number = Number(inputValue);
    if (isNaN(number)) {
      throw new Error('Введенное значение не является числом');
    }

    // Выводим сообщение, что введенное значение является числом
    messageBox.textContent = `Введенное значение "${inputValue}" является числом.`;
  } catch (error) {
    // Выводим сообщение об ошибке
    messageBox.textContent = error.message;
  }
}

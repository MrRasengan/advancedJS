// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class LibraryManager {
  #books = [];

  constructor(initialBooks = []) {
    // Проверяем, что в initialBooks нет дубликатов
    const uniqueBooks = new Set(initialBooks);
    if (uniqueBooks.size !== initialBooks.length) {
      throw new Error('Список начальных книг содержит дубликаты');
    }
    this.#books = Array.from(uniqueBooks);
  }

  get allBooks() {
    return this.#books.slice(); // Возвращаем копию массива книг
  }

  addBook(title) {
    // Проверяем, есть ли книга с таким названием в списке
    if (this.#books.includes(title)) {
      throw new Error(`Книга "${title}" уже существует в библиотеке`);
    }
    this.#books.push(title);
  }

  removeBook(title) {
    const index = this.#books.indexOf(title);
    if (index === -1) {
      throw new Error(`Книги "${title}" нет в библиотеке`);
    }
    this.#books.splice(index, 1);
  }

  hasBook(title) {
    return this.#books.includes(title);
  }
}

// Создание библиотеки с начальным списком книг
const library = new LibraryManager(['Война и мир', 'Преступление и наказание', 'Анна Каренина']);

// Получение списка всех книг
console.log(library.allBooks); // ['Война и мир', 'Преступление и наказание', 'Анна Каренина']

// Добавление новой книги
library.addBook('Мастер и Маргарита');
console.log(library.allBooks); // ['Война и мир', 'Преступление и наказание', 'Анна Каренина', 'Мастер и Маргарита']

// Попытка добавить существующую книгу
try {
  library.addBook('Война и мир');
} catch (error) {
  console.log(error.message); // Книга "Война и мир" уже существует в библиотеке
}

// Удаление книги
library.removeBook('Анна Каренина');
console.log(library.allBooks); // ['Война и мир', 'Преступление и наказание', 'Мастер и Маргарита']

// Проверка наличия книги
console.log(library.hasBook('Мастер и Маргарита')); // true
console.log(library.hasBook('Война и мир')); // true
console.log(library.hasBook('Анна Каренина')); // false

// Попытка удалить несуществующую книгу
try {
  library.removeBook('Идиот');
} catch (error) {
  console.log(error.message); // Книги "Идиот" нет в библиотеке
}

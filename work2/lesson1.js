// Задание 1
// Давайте создадим класс для управления банковским счетом. В этом классе будет приватное
// свойство для хранения текущего баланса, а также методы для внесения и снятия денег со счета.
// 1. Класс должен содержать приватное свойство #balance, которое инициализируется
// значением 0 и представляет собой текущий баланс счета.
// 2. Реализуйте геттер balance, который позволит получить информацию о текущем балансе.
// 3. Реализуйте метод deposit(amount), который позволит вносить средства на счет.
// Убедитесь, что сумма внесения не отрицательная; в противном случае выбрасывайте
// ошибку.
// 4. Реализуйте метод withdraw(amount), который позволит снимать средства со счета.
// Убедитесь, что сумма для снятия неотрицательная и что на счете достаточно средств; в
// противном случае выбрасывайте ошибку.
// 5. Реализуйте конструктор, который принимает начальный баланс в качестве аргумента.
// Убедитесь, что начальный баланс не отрицательный; в противном случае выбрасывайте
// ошибку.

class BankAccount {
  #balance;

  constructor(initialBalance) {
    if (initialBalance < 0) {
      throw new Error('Начальный баланс не может быть отрицательным');
    }
    this.#balance = initialBalance;
  }

  get balance() {
    return this.#balance;
  }

  deposit(amount) {
    if (amount < 0) {
      throw new Error('Сумма внесения не может быть отрицательной');
    }
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount < 0) {
      throw new Error('Сумма снятия не может быть отрицательной');
    }
    if (this.#balance < amount) {
      throw new Error('Недостаточно средств на счету');
    }
    this.#balance -= amount;
  }
}

try {
  const account = new BankAccount(1000);
  console.log('Баланс:', account.balance); // Вывод: Баланс: 1000

  account.deposit(500);
  console.log('Баланс:', account.balance); // Вывод: Баланс: 1500

  account.withdraw(2000);
  console.log('Баланс:', account.balance); // Ошибка: Недостаточно средств на счету
} catch (error) {
  console.error(error.message);
}

// Задание 2
// У вас есть базовый список пользователей. Некоторые из них имеют информацию о своем премиум-аккаунте, а
// некоторые – нет.
// Ваша задача – создать структуру классов для этих пользователей и функцию для получения информации о
// наличии премиум-аккаунта, используя Опциональную цепочку вызовов методов, оператор нулевого слияния
// и instanceof.
// 1. Создайте базовый класс User с базовой информацией (например, имя и фамилия).
// 2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс
// PremiumUser должен иметь свойство premiumAccount (допустим, дата истечения срока
// действия), а у RegularUser такого свойства нет.
// 3. Создайте функцию getAccountInfo(user), которая принимает объект класса User и
// возвращает информацию о наличии и сроке действия премиум-аккаунта, используя
// Опциональную цепочку вызовов методов и оператор нулевого слияния.
// 4. В функции getAccountInfo используйте instanceof для проверки типа переданного
// пользователя и дайте соответствующий ответ.

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class PremiumUser extends User {
  constructor(firstName, lastName, premiumAccountExpiration) {
    super(firstName, lastName);
    this.premiumAccount = {
      expirationDate: premiumAccountExpiration,
    };
  }
}

class RegularUser extends User {
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }
}

function getAccountInfo(user) {
  if (user instanceof PremiumUser) {
    return `Премиум-аккаунт действителен до: ${user.premiumAccount?.expirationDate ?? 'Нет информации'}`;
  } else if (user instanceof RegularUser) {
    return 'Обычный аккаунт';
  } else {
    return 'Неизвестный тип пользователя';
  }
}

// Примеры использования
const premiumUser = new PremiumUser('Иван', 'Иванов', '2023-12-31');
const regularUser = new RegularUser('Петр', 'Петров');
const unknownUser = { firstName: 'Анна', lastName: 'Смирнова' };

console.log(getAccountInfo(premiumUser)); // Вывод: Премиум-аккаунт действителен до: 2023-12-31
console.log(getAccountInfo(regularUser)); // Вывод: Обычный аккаунт
console.log(getAccountInfo(unknownUser)); // Вывод: Неизвестный тип пользователя

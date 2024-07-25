// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

// Создаем объект музыкальной коллекции
const musicCollection = {
  albums: [
    { title: 'Abbey Road', artist: 'The Beatles', year: 1969 },
    { title: 'Kind of Blue', artist: 'Miles Davis', year: 1959 },
    { title: '21', artist: 'Adele', year: 2011 },
    { title: 'Nevermind', artist: 'Nirvana', year: 1991 },
    { title: 'Rumours', artist: 'Fleetwood Mac', year: 1977 }
  ],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.albums.length) {
          return { value: this.albums[index++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
};

// Перебираем альбомы в музыкальной коллекции с помощью цикла for...of
for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}

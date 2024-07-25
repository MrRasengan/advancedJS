// Задание 4
//  Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить,
// кто из них посетил какие уроки и кто из преподавателей вёл данные уроки.
// 1. Map будет использоваться для хранения соответствия между уроком и
// преподавателем.
// 2. Set будет использоваться для хранения уникальных уроков, которые
// посетил каждый студент.

// Создаем объекты для студентов и преподавателей
const students = [
  { name: 'Иван', id: 1 },
  { name: 'Мария', id: 2 },
  { name: 'Сергей', id: 3 },
  { name: 'Анна', id: 4 }
];

const teachers = [
  { name: 'Петр Иванов', id: 1 },
  { name: 'Екатерина Сидорова', id: 2 },
  { name: 'Александр Кузнецов', id: 3 }
];

// Создаем Map для хранения соответствия между уроком и преподавателем
const lessonToTeacher = new Map();

// Наполняем Map уроками и преподавателями
lessonToTeacher.set('Математика', teachers[0]);
lessonToTeacher.set('Русский язык', teachers[1]);
lessonToTeacher.set('Физика', teachers[2]);
lessonToTeacher.set('История', teachers[0]);
lessonToTeacher.set('Биология', teachers[1]);

// Создаем объект для хранения посещенных уроков каждым студентом
const studentAttendance = {};

// Заполняем объект studentAttendance
students.forEach(student => {
  studentAttendance[student.id] = new Set();
});

// Имитируем посещение студентами уроков
students[0].attended = ['Математика', 'Физика', 'История'];
students[1].attended = ['Русский язык', 'История', 'Биология'];
students[2].attended = ['Математика', 'Физика', 'Биология'];
students[3].attended = ['Русский язык', 'История', 'Биология'];

// Обновляем информацию о посещенных уроках в объекте studentAttendance
students.forEach(student => {
  student.attended.forEach(lesson => {
    studentAttendance[student.id].add(lesson);
  });
});

// Выводим информацию о посещенных уроках и преподавателях
console.log('Посещенные уроки студентов:');
for (const [studentId, lessons] of Object.entries(studentAttendance)) {
  console.log(`Студент ${students.find(s => s.id === parseInt(studentId)).name}:`);
  console.log(lessons);
}

console.log('\nИнформация о преподавателях:');
for (const [lesson, teacher] of lessonToTeacher) {
  console.log(`Урок "${lesson}" ведет ${teacher.name}`);
}

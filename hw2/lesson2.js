// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: "1",
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: "2",
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: "3",
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: "4",
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

// Функция для отображения начальных отзывов
function displayReviews() {
  const reviewContainer = document.getElementById('reviewContainer');
  initialData.forEach(({ product, reviews }) => {
    const productHeader = document.createElement('h2');
    productHeader.textContent = product;
    reviewContainer.appendChild(productHeader);

    reviews.forEach(({ id, text }) => {
      const reviewElement = document.createElement('p');
      reviewElement.textContent = `Review ${id}: ${text}`;
      reviewContainer.appendChild(reviewElement);
    });
  });
}

// Функция для добавления нового отзыва
function addReview() {
  const reviewInput = document.getElementById('reviewInput');
  const reviewText = reviewInput.value.trim();
  reviewInput.value = '';

  try {
    if (reviewText.length < 50 || reviewText.length > 500) {
      throw new Error('Длина отзыва должна быть от 50 до 500 символов');
    }

    const newReview = document.createElement('p');
    newReview.textContent = `New review: ${reviewText}`;
    document.getElementById('reviewContainer').appendChild(newReview);
  } catch (error) {
    alert(error.message);
  }
}

// Отображение начальных отзывов при загрузке страницы
displayReviews();

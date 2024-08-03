// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

// Селекторы
const addReviewPage = document.getElementById('add-review-page');
const viewReviewsPage = document.getElementById('view-reviews-page');
const productSelect = document.getElementById('product-select');
const newProductInput = document.getElementById('new-product-name');
const reviewTextArea = document.getElementById('review-text');
const addReviewButton = document.getElementById('add-review-button');
const productList = document.getElementById('product-list');
const reviewList = document.getElementById('review-list');
const selectedProduct = document.getElementById('selected-product');
const reviewsContainer = document.getElementById('reviews');

// Отображение страницы добавления отзыва
showAddReviewPage();

// Функция для отображения страницы добавления отзыва
function showAddReviewPage() {
  addReviewPage.style.display = 'block';
  viewReviewsPage.style.display = 'none';
  updateProductSelect();
}

// Функция для отображения страницы просмотра отзывов
function showViewReviewsPage() {
  addReviewPage.style.display = 'none';
  viewReviewsPage.style.display = 'block';
  displayProductList();
}

// Функция для добавления отзыва
function addReview() {
  const selectedProductName = productSelect.value;
  const newProductName = newProductInput.value.trim();
  const reviewText = reviewTextArea.value.trim();

  let productName = selectedProductName;
  if (!productName && newProductName) {
    productName = newProductName;
  }

  if (productName && reviewText) {
    let reviews = JSON.parse(localStorage.getItem(productName)) || [];
    reviews.push({ text: reviewText });
    localStorage.setItem(productName, JSON.stringify(reviews));

    newProductInput.value = '';
    reviewTextArea.value = '';
    showViewReviewsPage();
  }
}

// Обработчик события нажатия на кнопку "Добавить отзыв"
addReviewButton.addEventListener('click', addReview);

// Функция для обновления списка продуктов в выпадающем списке
function updateProductSelect() {
  productSelect.innerHTML = '<option value="">Выберите продукт</option>';

  for (let product in localStorage) {
    if (localStorage.hasOwnProperty(product)) {
      const option = document.createElement('option');
      option.value = product;
      option.textContent = product;
      productSelect.appendChild(option);
    }
  }
}

// Функция для отображения списка продуктов с отзывами
function displayProductList() {
  productList.innerHTML = '';

  for (let product in localStorage) {
    if (localStorage.hasOwnProperty(product)) {
      const productElement = document.createElement('div');

      productElement.textContent = product;
      productElement.addEventListener('click', () => showReviewsForProduct(product));
      productList.appendChild(productElement);
    }
  }
}

// Функция для отображения списка отзывов для выбранного продукта
function showReviewsForProduct(productName) {
  const reviews = JSON.parse(localStorage.getItem(productName));
  if (reviews) {
    selectedProduct.textContent = productName;
    reviewsContainer.innerHTML = '';

    reviews.forEach((review, index) => {
      const reviewElement = document.createElement('li');
      reviewElement.textContent = review.text;
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Удалить';
      deleteButton.addEventListener('click', () => deleteReview(productName, index));
      reviewElement.appendChild(deleteButton);
      reviewsContainer.appendChild(reviewElement);
    });

    reviewList.style.display = 'block';
  }
}

// Функция для удаления отзыва
function deleteReview(productName, index) {
  let reviews = JSON.parse(localStorage.getItem(productName));
  reviews.splice(index, 1);
  localStorage.setItem(productName, JSON.stringify(reviews));
  showReviewsForProduct(productName);
}

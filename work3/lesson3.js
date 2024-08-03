// Задание 3
// Создать интерактивную веб-страницу, где пользователи могут выбирать различные элементы мебели
// (например, столы, стулья, диваны) и их параметры (материал, цвет, стиль). Выбранные параметры должны
// быть сохранены так, чтобы при повторном посещении сайта пользователь мог видеть свой ранее собранный
// комплект мебели.
// 1. Пользователи могут выбирать из различных типов мебели (например, столы, стулья, диваны).
// 2. Для каждого типа мебели доступен выбор параметров (цвет, материал, стиль).
// 3. Предусмотреть кнопку "Сохранить комплект", при нажатии на которую текущий выбор пользователя
// сохраняется в localStorage.
// 4. При повторном посещении сайта автоматически загружать сохраненные параметры из localStorage и
// отображать ранее созданный комплект.
// 5. Предусмотреть возможность для пользователя очистить сохраненные настройки через специальную
// кнопку.
// 6. После нажатия на кнопку "Сохранить" на странице должен отображаться выбранный комплект.
// 7. При нажатии на кнопку "Очистить" должно появляться сообщение о том, что выбор не сделан и
// предыдущие настройки удалены.

const furnitureTypeSelect = document.getElementById('furnitureTypeSelect');
const furnitureOptionsDiv = document.getElementById('furnitureOptions');
const colorSelect = document.getElementById('colorSelect');
const materialSelect = document.getElementById('materialSelect');
const styleSelect = document.getElementById('styleSelect');
const saveButton = document.getElementById('saveButton');
const clearButton = document.getElementById('clearButton');
const furnitureDisplayDiv = document.getElementById('furnitureDisplay');
const savedFurnitureSetDiv = document.getElementById('savedFurniture Set');

// Конфигурация мебели
const furnitureConfig = {
  table: { colors: ['Brown', 'White', 'Black'], materials: ['Wood', 'Glass', 'Metal'], styles: ['Modern', 'Classic', 'Rustic'] },
  chair: { colors: ['Beige', 'Gray', 'Red'], materials: ['Wood', 'Leather', 'Fabric'], styles: ['Contemporary', 'Vintage', 'Minimalist'] },
  sofa: { colors: ['Gray', 'Blue', 'Cream'], materials: ['Fabric', 'Leather', 'Microfiber'], styles: ['Sectional', 'Chesterfield', 'Mid-Century'] }
};

// Загрузка сохраненных настроек при загрузке страницы
loadSavedFurnitureSet();

// Обработка выбора типа мебели
furnitureTypeSelect.addEventListener('change', () => {
  const selectedType = furnitureTypeSelect.value;
  updateFurnitureOptions(selectedType);
});

// Обработка нажатия на "Сохранить комплект"
saveButton.addEventListener('click', () => {
  const selectedType = furnitureTypeSelect.value;
  const selectedColor = colorSelect.value;
  const selectedMaterial = materialSelect.value;
  const selectedStyle = styleSelect.value;

  if (selectedType && selectedColor && selectedMaterial && selectedStyle) {
    saveFurnitureSet(selectedType, selectedColor, selectedMaterial, selectedStyle);
    displaySavedFurnitureSet();
  } else {
    alert('Please select all options before saving.');
  }
});

// Обработка нажатия на "Очистить"
clearButton.addEventListener('click', () => {
  clearSavedFurnitureSet();
  furnitureDisplayDiv.textContent = 'No furniture set saved.';
});

function updateFurnitureOptions(furnitureType) {
  if (furnitureType) {
    const config = furnitureConfig[furnitureType];
    updateSelectOptions(colorSelect, config.colors);
    updateSelectOptions(materialSelect, config.materials);
    updateSelectOptions(styleSelect, config.styles);
    furnitureOptionsDiv.style.display = 'block';
  } else {

    furnitureOptionsDiv.style.display = 'none';
  }
}

function updateSelectOptions(select, options) {
  select.innerHTML = '';
  options.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option;
    optionElement.textContent = option;
    select.appendChild(optionElement);
  });
}

function saveFurnitureSet(type, color, material, style) {
  const furnitureSet = { type, color, material, style };
  localStorage.setItem('furnitureSet', JSON.stringify(furnitureSet));
}

function displaySavedFurnitureSet() {
  const savedFurnitureSet = JSON.parse(localStorage.getItem('furnitureSet'));
  if (savedFurnitureSet) {
    furnitureDisplayDiv.textContent = `Your saved furniture set: ${savedFurnitureSet.type} in ${savedFurnitureSet.color} ${savedFurnitureSet.material} ${savedFurnitureSet.style} style.`;
    if (savedFurnitureSetDiv) {
      savedFurnitureSetDiv.style.display = 'block';
    }
  } else {
    furnitureDisplayDiv.textContent = 'No furniture set saved.';
    if (savedFurnitureSetDiv) {
      savedFurnitureSetDiv.style.display = 'none';
    }
  }
}

function loadSavedFurnitureSet() {
  const savedFurnitureSet = JSON.parse(localStorage.getItem('furnitureSet'));
  if (savedFurnitureSet) {
    updateFurnitureOptions(savedFurnitureSet.type);
    colorSelect.value = savedFurnitureSet.color;
    materialSelect.value = savedFurnitureSet.material;
    styleSelect.value = savedFurnitureSet.style;
    displaySavedFurnitureSet();
  }
}


function clearSavedFurnitureSet() {
  localStorage.removeItem('furnitureSet');
  furnitureDisplayDiv.textContent = 'No furniture set saved.';
  savedFurnitureSetDiv.style.display = 'none';
}

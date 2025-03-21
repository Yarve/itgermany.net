const pagesToIndex = [
'https://itgermany.net/iih/iih-all.html',

/*    
'https://itgermany.net',
'https://itgermany.net/',
'https://itgermany.net/iih/',
'https://itgermany.net/iih/iih-gloss.html',
'https://itgermany.net/iih/iih01-intro.html',
'/iih/iih02-basic-web-pages.html',
'/iih/iih03-links-and-images.html',
'/iih/iih04-hello-css.html',
'/iih/iih05-css-box-model.html',
'/iih/iih06-css-selectors.html',
'/iih/iih07-floats.html',
'/iih/iih08-flexbox.html',
'/iih/iih09-advanced-positioning.html',
'/iih/iih10-responsive-design.html',
'/iih/iih11-responsive-images.html',
'/iih/iih12-semantic-html.html',
'/iih/iih13-forms.html',
'/iih/iih14-web-typography.html',
*/ Добавляй сюда другие страницы из папки /iih, если нужно
];

let indexedContent = [];

// Функция для загрузки содержимого страниц
async function loadPagesContent() {
for (const page of pagesToIndex) {
try {
const response = await fetch(page);
const pageContent = await response.text();
console.log(pageContent);
indexedContent.push({
url: page,
content: pageContent.toLowerCase() // Приведение к нижнему регистру для упрощения поиска
});
} catch (error) {
console.error(`Ошибка при загрузке страницы ${page}:`, error);
}
}
}

// Выполняем загрузку всех страниц при загрузке окна
window.onload = async function () {
await loadPagesContent();
};

// Функция поиска
function performSearch() {
const query = document.getElementById('searchInput').value.toLowerCase();
const resultsContainer = document.getElementById('results');
resultsContainer.innerHTML = ''; // Очищаем предыдущие результаты

if (query) {
let resultsFound = false;
indexedContent.forEach(page => {
if (page.content.includes(query)) {
const resultDiv = document.createElement('div');
resultDiv.classList.add('result-item');
resultDiv.innerHTML = <a href="${page.url}">${page.url}</a>;
resultsContainer.appendChild(resultDiv);
resultsFound = true;
}
});

if (!resultsFound) {
resultsContainer.innerHTML = '<p>Ничего не найдено.</p>';
}
} else {
resultsContainer.innerHTML = '<p>Введите поисковый запрос.</p>';
}
}
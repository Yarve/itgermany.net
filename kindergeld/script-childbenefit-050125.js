document.addEventListener("DOMContentLoaded", function () {
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const ageSection = document.getElementById("kid1-age");
const balanceSection = document.getElementById("kid1-balancedue");
const ageText = ageSection.querySelector("p");
const balanceText = balanceSection.querySelector("p");

const monthlyKindergeld = 250; // Kindergeld per month
const maxMonths = 216; // Maximum months for Kindergeld (18 years)

function updateKindergeldDetails() {
const month = parseInt(monthInput.value, 10);
const year = yearInput.value; // Keep as a string for length check

// Ensure the year has 4 digits and the month is valid
if (year.length === 4 && !isNaN(month) && month >= 1 && month <= 12) {
const yearNumber = parseInt(year, 10);

const currentDate = new Date();
const birthDate = new Date(yearNumber, month - 1); // Months are 0-indexed
const totalMonths = Math.max(
0,
(currentDate.getFullYear() - birthDate.getFullYear()) * 12 +
currentDate.getMonth() -
birthDate.getMonth()
);

const years = Math.floor(totalMonths / 12);
const remainingMonths = totalMonths % 12;

// Update age section
ageText.innerHTML = `Your child is <span style="color: blue;">${years}</span> year and 
<span style="color: blue;">${remainingMonths}</span> months old 
(<span style="color: blue;">${totalMonths}</span> months in total).`;

// Calculate remaining months and Kindergeld due
const monthsRemaining = Math.max(0, maxMonths - totalMonths);
const totalDue = monthsRemaining * monthlyKindergeld;

// Update balance section
balanceText.innerHTML = `If you will apply for Kindergeld now and formalities last about 2 months, 
you will receive <span style="color: crimson;">${totalDue.toLocaleString()}</span> Euro in total.`;
}
}

// Update calculations only when both inputs are valid
monthInput.addEventListener("input", updateKindergeldDetails);
yearInput.addEventListener("input", updateKindergeldDetails);
});

// Добавленная функция для очистки всех данных
function clearUserData() {
// Очищаем все текстовые поля
document.querySelectorAll('input[type="text"]').forEach(input => input.value = '');

// Сбрасываем возраст ребёнка
const ageElement = document.querySelector('#kid1-age p');
if (ageElement) {
ageElement.textContent = 'Your child is 00 year and 00 months old. Which is 00 months in total.';
}

// Сбрасываем сумму выплаты
const balanceElement = document.querySelector('#kid1-balancedue p');
if (balanceElement) {
balanceElement.textContent = 'If you will apply for Kindergeld now (formalities last about 2 months), you will receive 00 Euro in total.';
}
}

// RATING via FORMSUBMIT

// Выбор звёзд, скрытого поля и кнопки
const stars = document.querySelectorAll('.star');
const ratingInput = document.getElementById('rating-input');
const sendButton = document.getElementById('send-button');

// Функция для подсветки звёзд
function highlightStars(rating) {
stars.forEach(star => {
if (parseInt(star.dataset.value) <= rating) {
  star.classList.add('selected');
} else {
  star.classList.remove('selected');
}
});
}

// Обработчик кликов по звёздам
stars.forEach(star => {
star.addEventListener('click', () => {
const rating = star.dataset.value; // Получение значения звезды
ratingInput.value = rating;       // Установка значения в скрытое поле
highlightStars(rating);          // Подсветка звёзд

// Активируем кнопку, добавляя класс enabled
sendButton.disabled = false;     // Разблокировка кнопки
sendButton.classList.add('enabled'); // Добавление зелёной стилизации
});
});

// Отключаем кнопку при сбросе (опционально)
sendButton.addEventListener('click', () => {
sendButton.disabled = true;
sendButton.classList.remove('enabled');
});

document.addEventListener("DOMContentLoaded", function () {
const translations = {
en: {
navigatorTitle: "Kindergeld Navigator",
childBornQuestion: "Was your child born outside of Germany?",
ifYes: "If yes, please click here.",
monthOfEntry: "Specify the month of entry Germany:",
yearOfEntry: "Specify the year of entry Germany:",
hint: "Hint: Check the entry stamp in the passport.",
birthTime: "Your child's birth time",
monthOfBirth: "Enter month of birth:",
yearOfBirth: "Enter year of birth:",
ageSection: "Your child's age",
ageText: "Your child is {years} years and {months} months old. Which is {totalMonths} months in total.",
balanceSection:
"If you will apply for Kindergeld now (formalities last about 2 months), you will receive {totalDue} Euro in total.",
clearDataText: "For a new cadiculation, clear the form data below:",
clearButton: "Clear data",
notabene:
"Note that the exact sum depends on the future Kindergeld monthly amount in the future years. Since 1. January 2023 it is 250 Euro per child monthly.",
ratingHeader: "How useful is the idea of this App?",
ratingDescription:
"Please rate usefulness of this calculator (not its functionality or appearance).",
ratingAnonym: "100% anonym, no registration!",
sendRatingButton: "Send my rating",
},
ru: {
navigatorTitle: "Навигатор Kindergeld",
childBornQuestion: "Ваш ребенок родился за пределами Германии?",
ifYes: "Если да, нажмите здесь.",
monthOfEntry: "Укажите месяц въезда в Германию:",
yearOfEntry: "Укажите год въезда в Германию:",
hint: "Подсказка: проверьте штамп о въезде в паспорте.",
birthTime: "Время рождения вашего ребенка",
monthOfBirth: "Введите месяц рождения:",
yearOfBirth: "Введите год рождения:",
ageSection: "Возраст вашего ребенка",
ageText: "Вашему ребенку {years} лет и {months} месяцев. Всего это {totalMonths} месяцев.",
balanceSection:
"Если вы подадите заявление на Kindergeld сейчас (формальности займут около 2 месяцев), вы получите {totalDue} евро.",
clearDataText: "Для новой регистрации очистите данные формы ниже:",
clearButton: "Сбросить",
notabene:
"Обратите внимание, что точная сумма зависит от будущего размера Kindergeld в последующие годы. С 1 января 2023 года она составляет 250 евро на ребенка в месяц.",
ratingHeader: "Насколько полезна идея этого приложения?",
ratingDescription:
"Пожалуйста, оцените полезность этого калькулятора (не его функциональность или внешний вид).",
ratingAnonym: "100% анонимно, без регистрации!",
sendRatingButton: "Отправить мой рейтинг",
},
ua: {
navigatorTitle: "Навігатор Kindergeld",
childBornQuestion: "Чи народилася ваша дитина за межами Німеччини?",
ifYes: "Якщо так, натисніть тут.",
monthOfEntry: "Вкажіть місяць в'їзду до Німеччини:",
yearOfEntry: "Вкажіть рік в'їзду до Німеччини:",
hint: "Підказка: перевірте штамп про в'їзд у паспорті.",
birthTime: "Час народження вашої дитини",
monthOfBirth: "Введіть місяць народження:",
yearOfBirth: "Введіть рік народження:",
ageSection: "Вік вашої дитини",
ageText: "Вашій дитині {years} років і {months} місяців. Усього це {totalMonths} місяців.",
balanceSection:
"Якщо ви подасте заявку на Kindergeld зараз (формальності займуть близько 2 місяців), ви отримаєте {totalDue} євро.",
clearDataText: "Для нової реєстрації очистіть дані форми нижче:",
clearButton: "Скинути",
notabene:
"Зверніть увагу, що точна сума залежить від майбутнього розміру Kindergeld у наступні роки. З 1 січня 2023 року вона становить 250 євро на дитину на місяць.",
ratingHeader: "Наскільки корисна ідея цього додатка?",
ratingDescription:
"Будь ласка, оцініть корисність цього калькулятора (не його функціональність або зовнішній вигляд).",
ratingAnonym: "100% анонімно, без реєстрації!",
sendRatingButton: "Надіслати мій рейтинг",
},
};

function changeLanguage(lang) {
currentLang = lang;

// Заголовки и подзаголовки
document.querySelector("h1").textContent = translations[lang].navigatorTitle;
document.querySelector("#kid1-newcomer h2").textContent = translations[lang].childBornQuestion;
document.querySelector("#kid1-newcomer summary").textContent = translations[lang].ifYes;

// Раскрывающийся блок
document.querySelector("label[for='entry-month']").textContent = translations[lang].monthOfEntry;
document.querySelector("label[for='entry-year']").textContent = translations[lang].yearOfEntry;
document.querySelector("#kid1-newcomer small").textContent = translations[lang].hint;

// Раздел рождения ребенка
document.querySelector("#kid1-form h2").textContent = translations[lang].birthTime;
document.querySelector("label[for='month']").textContent = translations[lang].monthOfBirth;
document.querySelector("label[for='year']").textContent = translations[lang].yearOfBirth;

// Раздел возраста
document.querySelector("#kid1-age h2").textContent = translations[lang].ageSection;
document.querySelector("#kid1-age p").innerHTML = translations[lang].ageText
.replace("{years}", 0)
.replace("{months}", 0)
.replace("{totalMonths}", 0);

// Раздел выплат
document.querySelector("#kid1-balancedue p").innerHTML = translations[lang].balanceSection.replace("{totalDue}", 0);
document.querySelector(".cleardata p").textContent = translations[lang].clearDataText;
document.querySelector("#clear-data").textContent = translations[lang].clearButton;

// Примечание
document.querySelector(".notabene").textContent = translations[lang].notabene;

// Рейтинг
document.querySelector(".rating-container h4").textContent = translations[lang].ratingHeader;
document.querySelector(".rating-container p:nth-of-type(1)").textContent = translations[lang].ratingDescription;
document.querySelector(".rating-container p:nth-of-type(2)").textContent = translations[lang].ratingAnonym;
document.querySelector("#send-button").textContent = translations[lang].sendRatingButton;
}

let currentLang = "en"; // Язык по умолчанию
changeLanguage(currentLang);

const languageLinks = document.querySelectorAll(".language-link");
languageLinks.forEach((link) => {
link.addEventListener("click", function (e) {
e.preventDefault();
const lang = this.dataset.lang;
changeLanguage(lang);
});
});
});



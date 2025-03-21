document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        en: {
            navigatorTitle: "Kindergeld Navigator",
            childBornQuestion: "Was your child born outside of Germany?",
            ifYes: "If yes, please click here.",
            monthOfEntry: "Specify the month of entry Germany:",
            yearOfEntry: "Specify the year of entry Germany:",
            hint: "Hint: Check the entry stamp in the passport.",
            birthTime: "Month and year of child's birth",
            monthOfBirth: "Enter month of birth:",
            yearOfBirth: "Enter year of birth:",
            ageSection: "Your child's age",
            ageText: "Your child is <span style='color: red;'>{years}</span> years and <span style='color: red;'>{months}</span> months old. Which is <span style='color: red;'>{totalMonths}</span> months in total.",
            balanceSection: "If you will apply for Kindergeld now (formalities last about 2 months), you will receive <span style='color: red;'>{totalDue}</span> Euro in total.",
            clearDataText: "For a new cadiculation, clear the form data below:",
            clearButton: "Clear data",
            notabene: "Note that the exact sum depends on the future Kindergeld monthly amount in the future years. Since 1. January 2025 it is 255 Euro per child monthly.",
            ratingHeader: "How useful is the idea of this App?",
            ratingDescription: "Please rate usefulness of this calculator (not its functionality or appearance).",
            ratingAnonym: "100% anonym, no registration!",
            sendRatingButton: "Send my rating",
            calculateButton: "Calculate Kindergeld",
        },
        ru: {
            navigatorTitle: "Навигатор Kindergeld",
            childBornQuestion: "Ваш ребенок родился за пределами Германии?",
            ifYes: "Если да, нажмите здесь.",
            monthOfEntry: "Укажите месяц въезда в Германию:",
            yearOfEntry: "Укажите год въезда в Германию:",
            hint: "Подсказка: проверьте штамп о въезде в паспорте.",
            birthTime: "Месяц и год рождения ребенка",
            monthOfBirth: "Введите месяц рождения:",
            yearOfBirth: "Введите год рождения:",
            ageSection: "Возраст вашего ребенка",
            ageText: "Вашему ребенку <span style='color: red;'>{years}</span> лет и <span style='color: red;'>{months}</span> месяцев. Всего это <span style='color: red;'>{totalMonths}</span> месяцев.",
            balanceSection: "Если вы подадите заявление на Kindergeld сейчас (формальности займут около 2 месяцев), вы получите <span style='color: red;'>{totalDue}</span> евро.",
            clearDataText: "Для новой регистрации очистите данные формы ниже:",
            clearButton: "Сбросить",
            notabene: "Обратите внимание, что точная сумма зависит от будущего размера Kindergeld в последующие годы. С 1 января 2025 года она составляет 255 евро на ребенка в месяц.",
            ratingHeader: "Насколько полезна идея этого приложения?",
            ratingDescription: "Пожалуйста, оцените полезность этого калькулятора (не его функциональность или внешний вид).",
            ratingAnonym: "100% анонимно, без регистрации!",
            sendRatingButton: "Отправить мой рейтинг",
            calculateButton: "Рассчитать Kindergeld",
        },
        ua: {
            navigatorTitle: "Навігатор Kindergeld",
            childBornQuestion: "Чи народилася ваша дитина за межами Німеччини?",
            ifYes: "Якщо так, натисніть тут.",
            monthOfEntry: "Вкажіть місяць в'їзду до Німеччини:",
            yearOfEntry: "Вкажіть рік в'їзду до Німеччини:",
            hint: "Підказка: перевірте штамп про в'їзд у паспорті.",
            birthTime: "Мiсяць i рiк народження дитини",
            monthOfBirth: "Введіть місяць народження:",
            yearOfBirth: "Введіть рік народження:",
            ageSection: "Вік вашої дитини",
            ageText: "Вашій дитині <span style='color: red;'>{years}</span> років і <span style='color: red;'>{months}</span> місяців. Усього це <span style='color: red;'>{totalMonths}</span> місяців.",
            balanceSection: "Якщо ви подасте заявку на Kindergeld зараз (формальності займуть близько 2 місяців), ви отримаєте <span style='color: red;'>{totalDue}</span> євро.",
            clearDataText: "Для нової реєстрації очистіть дані форми нижче:",
            clearButton: "Скинути",
            notabene: "Зверніть увагу, що точна сума залежить від майбутнього розміру Kindergeld у наступні роки. З 1 січня 2025 року вона становить 255 євро на дитину на місяць.",
            ratingHeader: "Наскільки корисна ідея цього додатка?",
            ratingDescription: "Будь ласка, оцініть корисність цього калькулятора (не його функціональність або зовнішній вигляд).",
            ratingAnonym: "100% анонімно, без реєстрації!",
            sendRatingButton: "Надіслати мій рейтинг",
            calculateButton: "Розрахувати Kindergeld",
        },
        tr: {
            navigatorTitle: "Kindergeld Rehberi",
            childBornQuestion: "Çocuğunuz Almanya dışında mı doğdu?",
            ifYes: "Evet ise, buraya tıklayın.",
            monthOfEntry: "Almanya'ya giriş ayını belirtin:",
            yearOfEntry: "Almanya'ya giriş yılını belirtin:",
            hint: "İpucu: Pasaporttaki giriş damgasını kontrol edin.",
            birthTime: "Çocuğun doğum ayı ve yılı",
            monthOfBirth: "Doğum ayını girin:",
            yearOfBirth: "Doğum yılını girin:",
            ageSection: "Çocuğunuzun yaşı",
            ageText: "Çocuğunuz <span style='color: red;'>{years}</span> yaşında ve <span style='color: red;'>{months}</span> aylık. Toplamda <span style='color: red;'>{totalMonths}</span> ay.",
            balanceSection: "Şimdi Kindergeld başvurusu yaparsanız (resmi işlemler yaklaşık 2 ay sürer), toplamda <span style='color: red;'>{totalDue}</span> Euro alırsınız.",
            clearDataText: "Yeni bir kayıt için aşağıdaki form verilerini temizleyin:",
            clearButton: "Verileri temizle",
            notabene: "Unutmayın, kesin miktar gelecekteki yıllardaki Kindergeld aylık tutarına bağlıdır. 1 Ocak 2025'ten itibaren aylık çocuk başına 255 Euro'dur.",
            ratingHeader: "Bu uygulamanın fikri ne kadar faydalı?",
            ratingDescription: "Lütfen bu hesaplayıcının işlevselliğini veya görünümünü değil, faydasını değerlendirin.",
            ratingAnonym: "%100 anonim, kayıt yok!",
            sendRatingButton: "Derecelendirmemi gönder",
            calculateButton: "Kindergeld'i Hesapla",
        },
    };
  
    function changeLanguage(lang) {
        const title = document.querySelector("h1");
        if (title) title.textContent = translations[lang].navigatorTitle;
  
        const childBornQuestion = document.querySelector("#kid1-newcomer h2");
        if (childBornQuestion) childBornQuestion.textContent = translations[lang].childBornQuestion;
  
        const summary = document.querySelector("#kid1-newcomer summary");
        if (summary) summary.textContent = translations[lang].ifYes;
  
        const monthOfEntry = document.querySelector("label[for='entry-month']");
        if (monthOfEntry) monthOfEntry.textContent = translations[lang].monthOfEntry;
  
        const yearOfEntry = document.querySelector("label[for='entry-year']");
        if (yearOfEntry) yearOfEntry.textContent = translations[lang].yearOfEntry;
  
        const hint = document.querySelector("#kid1-newcomer small");
        if (hint) hint.textContent = translations[lang].hint;
  
        const birthTime = document.querySelector("#kid1-form h2");
        if (birthTime) birthTime.textContent = translations[lang].birthTime;
  
        const monthOfBirth = document.querySelector("label[for='month']");
        if (monthOfBirth) monthOfBirth.textContent = translations[lang].monthOfBirth;
  
        const yearOfBirth = document.querySelector("label[for='year']");
        if (yearOfBirth) yearOfBirth.textContent = translations[lang].yearOfBirth;
  
        const calculateButton = document.querySelector("#calculate-button");
        if (calculateButton) calculateButton.textContent = translations[lang].calculateButton;
  
        const ageSection = document.querySelector("#kid1-age h2");
        if (ageSection) ageSection.textContent = translations[lang].ageSection;
  
        const ageText = document.querySelector("#kid1-age p");
        if (ageText) {
            ageText.innerHTML = translations[lang].ageText
                .replace("{years}", 0)
                .replace("{months}", 0)
                .replace("{totalMonths}", 0);
        }
  
        const balanceSection = document.querySelector("#kid1-balancedue p");
        if (balanceSection) {
            balanceSection.innerHTML = translations[lang].balanceSection.replace("{totalDue}", 0);
        }
  
        const clearDataText = document.querySelector(".cleardata p");
        if (clearDataText) clearDataText.textContent = translations[lang].clearDataText;
  
        const clearButton = document.querySelector("#clear-data");
        if (clearButton) clearButton.textContent = translations[lang].clearButton;
  
        const notabene = document.querySelector(".notabene");
        if (notabene) notabene.textContent = translations[lang].notabene;
  
        const ratingHeader = document.querySelector(".rating-container h4");
        if (ratingHeader) ratingHeader.textContent = translations[lang].ratingHeader;
  
        const ratingDescription = document.querySelector(".rating-container p:nth-of-type(1)");
        if (ratingDescription) ratingDescription.textContent = translations[lang].ratingDescription;
  
        const ratingAnonym = document.querySelector(".rating-container p:nth-of-type(2)");
        if (ratingAnonym) ratingAnonym.textContent = translations[lang].ratingAnonym;
    }
  
    const languageLinks = document.querySelectorAll(".language-link");
    languageLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const lang = this.dataset.lang;
            changeLanguage(lang);
        });
    });
  
    const monthInput = document.getElementById("month");
    const yearInput = document.getElementById("year");
    const ageSection = document.getElementById("kid1-age");
    const balanceSection = document.getElementById("kid1-balancedue");
    const ageText = ageSection.querySelector("p");
    const balanceText = balanceSection.querySelector("p");
  
    const monthlyKindergeld = 250; // Kindergeld per month until end of 2024
    const monthlyKindergeld2025 = 255; // Kindergeld per month from 2025 onwards
    const maxMonths = 216; // Maximum months for Kindergeld (18 years)
  
    function updateKindergeldDetails() {
        const month = parseInt(monthInput.value, 10);
        const year = yearInput.value; // Keep as a string for length check
  
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
  
            const lang = document.querySelector(".language-link.active")?.dataset.lang || "en";
            
            ageText.innerHTML = translations[lang].ageText
                .replace("{years}", years)
                .replace("{months}", remainingMonths)
                .replace("{totalMonths}", totalMonths);
  
            const monthsRemaining2024 = Math.max(0, Math.min(maxMonths - totalMonths, (2024 - currentDate.getFullYear()) * 12 + 12 - currentDate.getMonth()));
            const monthsRemaining2025 = Math.max(0, maxMonths - totalMonths - monthsRemaining2024);
            const totalDue = monthsRemaining2024 * monthlyKindergeld + monthsRemaining2025 * monthlyKindergeld2025;
  
            balanceText.innerHTML = translations[lang].balanceSection.replace("{totalDue}", totalDue.toLocaleString());
        }
    }
  
    const calculateButton = document.querySelector("#calculate-button");
    calculateButton.addEventListener("click", updateKindergeldDetails);
  
    function clearUserData() {
        document.querySelectorAll('input[type="text"]').forEach(input => input.value = '');
  
        const ageElement = document.querySelector('#kid1-age p');
        if (ageElement) {
            ageElement.textContent = 'Your child is 00 year and 00 months old. Which is 00 months in total.';
        }
  
        const balanceElement = document.querySelector('#kid1-balancedue p');
        if (balanceElement) {
            balanceElement.textContent = 'If you will apply for Kindergeld now (formalities last about 2 months), you will receive 00 Euro in total.';
        }
    }
  
    const stars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('rating-input');
    const sendButton = document.getElementById('send-button');
  
    function highlightStars(rating) {
        stars.forEach(star => {
            if (parseInt(star.dataset.value) <= rating) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    }
  
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = star.dataset.value; // Получение значения звезды
            ratingInput.value = rating;       // Установка значения в скрытое поле
            highlightStars(rating);          // Подсветка звёзд
  
            sendButton.disabled = false;     // Разблокировка кнопки
            sendButton.classList.add('enabled'); // Добавление зелёной стилизации
        });
    });
  
    sendButton.addEventListener('click', () => {
        sendButton.disabled = true;
        sendButton.classList.remove('enabled');
    });
  });
  
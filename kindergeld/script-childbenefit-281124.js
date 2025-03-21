// document.addEventListener("DOMContentLoaded", function () {
//   // Все звездочки
//   const stars = document.querySelectorAll(".star");
//   const ratingInput = document.getElementById("rating-input");
//   const sendButton = document.getElementById("send-button");

//   // Добавляем обработчик клика для каждой звезды
//   stars.forEach((star) => {
//     star.addEventListener("click", function () {
//       const rating = this.getAttribute("data-value");

//       // Заполняем скрытое поле
//       ratingInput.value = rating;

//       // Подсвечиваем выбранные звезды
//       stars.forEach((s) => {
//         if (s.getAttribute("data-value") <= rating) {
//           s.style.color = "gold";
//         } else {
//           s.style.color = "black";
//         }
//       });

//       // Активируем кнопку отправки
//       sendButton.disabled = false;
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".star");
  const ratingInput = document.getElementById("rating-input");
  const sendButton = document.getElementById("send-button");

  // Слушатели событий для звездочек
  stars.forEach((star, index) => {
    star.addEventListener("click", function () {
      const rating = index + 1; // Определяем рейтинг
      ratingInput.value = rating; // Устанавливаем значение в скрытом поле

      // Закрашиваем звезды до выбранной
      stars.forEach((s, i) => {
        s.style.color = i < rating ? "gold" : "#ddd";
      });

      // Активируем кнопку отправки
      sendButton.disabled = false;
      sendButton.style.backgroundColor = "green"; // Кнопка становится зеленой
    });
  });

  // Слушатель для отправки формы
  sendButton.addEventListener("click", function () {
    sendButton.style.backgroundColor = "yellow"; // Кнопка становится желтой на миг
    setTimeout(() => {
      // Сбрасываем состояние звезд и кнопки после отправки
      stars.forEach((star) => (star.style.color = "#ddd"));
      sendButton.disabled = true;
      sendButton.style.backgroundColor = "#ccc";
      ratingInput.value = ""; // Сбрасываем значение рейтинга
    }, 500); // Таймаут для визуального эффекта
  });
});

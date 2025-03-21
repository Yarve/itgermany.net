//  62

// console.log(form.username.value);
// });

// const username ='shaunp123';
// const pattern = /^[a-z]{6,}$/;

  // let result = pattern.test(username);
  // console.log(result);

  // if(result){
  //   console.log('regex test passed :)');
  // }else{
  //   console.log('regex test failed :(');
  // }

  // let result = username.search(pattern);
  // console.log(result);


  



// const form = document.querySelector('.signup-form');
// //const username = document.querySelector('#username');  // way #1 - querySelector

// form.addEventListener('submit', e => {
// e.preventDefault();
// //console.log(username.value);
// console.log(form.username.value);  // way #2 - dot-notation
// });


// 73 - reduce method

// const scores = [10,20,60,40,70,90,30];

// const result = scores.reduce((acc, curr) => {
// if(curr > 50){
//     acc++;
// }
// return acc;
// }, 0);

// console.log(result);

// const scores = [
//     {player: 'mario', score: 50},
//     {player: 'yoshi', score: 30},
//     {player: 'mario', score: 70},
//     {player: 'crystal', score: 60},
// ];

// const marioTotal = scores.reduce((acc, curr) => {
// if(curr.player === 'mario'){
// acc += curr.score;
// }
// return acc;
// }, 0);

// console.log(marioTotal); // 120



// 74 - find method

const scores = [10,5,0,40,90,10,20,70];

// const firstHighScore = scores.find((score) => {
// return score > 50;
// });

// console.log(firstHighScore);

// simplified version:
const firstHighScore = scores.find(score => score > 50);

console.log(firstHighScore);

// 75 - sort method 
// Пример 1: Сортировка строк

const names = ["Mario", "Shaun", "Chun-Li", "Yoshi", "Luigi"   ];
// // Сортируем массив
// names.sort();

// console.log(names);
// Результат: ["Chun-Li", "Luigi", "Mario", "Sean", "Yoshi"]
// Особенность:
// Метод изменяет исходный массив (деструктивный метод). Чтобы сохранить оригинал, необходимо создать его копию:

// const originalNames = [...names];
// originalNames.sort();
// Пример 2: Сортировка чисел
// Для чисел встроенный алгоритм сортировки работает не совсем корректно, так как сравнивает их как строки:

const scores = [10, 50, 20, 5, 35, 70, 45];

// names.sort();
// names.reverse();

// console.log(names);
// // Результат: [10, 20, 5, 50, 70] (неверный порядок)
// Использование функции сравнения
// Для правильной сортировки чисел используется функция сравнения:

// const scores = [10, 5, 70, 20, 50];

// // Функция сравнения
scores.sort((a, b) => a - b);

// scores.reverse();
console.log(scores);
// // Результат: [5, 10, 20, 50, 70]
// a - b возвращает отрицательное значение, если a меньше b, что приводит к сортировке от меньшего к большему.
// b - a сортирует в обратном порядке.
// Пример 3: Сортировка объектов
// Когда массив состоит из объектов, необходимо указать, по какому свойству сортировать:

const players = [
  { name: "Mario", score: 20 },
  { name: "Luigi", score: 10 },
  { name: "Chun-Li", score: 50 },
  { name: "Yoshi", score: 30 },
  { name: "Shaun", score: 70 }
];

// // Сортируем по убыванию score
// players.sort();
// players.sort((a, b) => {
//     if(a.score > b.score){
//         return -1;
//     } else if (b.score > a.score) {
//             return 1;
//     } else {
//         return 0;
//     }
// });

players.sort((a, b) => b.score - a.score);

console.log(players);
// // Результат:
// // [
// //   { name: "Luigi", score: 70 },
// //   { name: "Mario", score: 50 },
// //   { name: "Sean", score: 40 },
// //   { name: "Chun-Li", score: 30 }
// // ]
// // Объяснение функции сравнения:

// // a и b — два соседних объекта массива.
// // b.score - a.score сортирует в порядке убывания по свойству score.
// // Метод reverse()
// // Метод reverse() полностью переворачивает порядок элементов массива.

// // const names = ["Mario", "Luigi", "Yoshi", "Chun-Li", "Sean"];

// // Переворот массива
// // names.reverse();

// // console.log(names);
// // Результат: ["Sean", "Chun-Li", "Yoshi", "Luigi", "Mario"]
// // Совмещение sort() и reverse(): Для сортировки в обратном алфавитном порядке:

// // names.sort().reverse();
// // console.log(names);
// // Результат: ["Yoshi", "Sean", "Mario", "Luigi", "Chun-Li"]






// Looping a Triangle
// let hash = "#";
// while (hash.length < 8) {
//     console.log(hash);
//     hash = hash + "#";
// }

// FizzBuzz "junior" way:


// for (let n = 1; n <= 100; n++) {
//     if (n % 3 === 0 && n % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (n % 3 === 0) {
//       console.log("Fizz");
//     } else if (n % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(n); // Выводим число, если оно не кратно 3 или 5
//     }
//   }
  
  
  // c пояснениями для каждой строки:
  
  
  // for (let n = 1; n <= 100; n++) { // Цикл, перебирающий числа от 1 до 100
  //   if (n % 3 === 0 && n % 5 === 0) { // Проверяем, делится ли число одновременно на 3 и 5
  //     console.log("FizzBuzz"); // Выводим "FizzBuzz", если число кратно и 3, и 5
  //   } else if (n % 3 === 0) { // Проверяем, делится ли число только на 3
  //     console.log("Fizz"); // Выводим "Fizz", если число кратно только 3
  //   } else if (n % 5 === 0) { // Проверяем, делится ли число только на 5
  //     console.log("Buzz"); // Выводим "Buzz", если число кратно только 5
  //   } else { 
  //     console.log(n); // Выводим число, если оно не кратно ни 3, ни 5
  //   }
  // }
    // FizzBuzz "senior" way:
  
    // for (let n = 1; n <= 100; n++) { // Цикл, перебирающий числа от 1 до 100
    //   let output = ""; // Создаем пустую строку, в которую будем добавлять "Fizz" и/или "Buzz" при необходимости
    //   if (n % 3 == 0) output += "Fizz"; // Если число кратно 3, добавляем "Fizz" к output
    //   if (n % 5 == 0) output += "Buzz"; // Если число кратно 5, добавляем "Buzz" к output
    //   console.log(output || n); // Если output не пустой, выводим его; иначе выводим число n
    // }
  
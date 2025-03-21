 
 // function expression
 const speak = function(){
    console.log('good day!');
  };

greet();
greet();
greet();

// function declaration
//     function greet(){
//     console.log('hello there');
//   }
  

// speak();


// arguments & parameters
 
//   const speak = function(name = 'luigi', time = 'night'){
//     console.log(`good ${time} ${name}!`);
//   }

//  speak();
//  speak('sla', 'day');

//    // arguments & parameters
 
//   const speak = function(name = 'luigi', time = 'night'){
//     console.log(`good ${time} ${name}!`);
//   }

//  speak();
//  speak('sla', 'day');

// regular function
// const calcArea = function(radius){
//  return 3.14 * radius**2;
//  }


const calcArea = function(radius){
   let area = 3.14 * radius**2;
   return area;
}

const a = calcArea(5);
console.log('area is: ', a);
 
 // arrow function

 ...

 const name = 'shaun';

// functions

const greet = () => 'hello';

let resultOne = greet();

console.log(resultOne);

// methods

let resultTwo = name.toUpperCase();
console.log(resultTwo);

////////////////////////////////////////

const myFunc = (callbackFunc) => {
   // do somethingg
   let value = 50;
   callbackFunc(value);
};

// myFunc(function(value){
  myFunc(value => {
   // do something
      console.log(value);
   });



   let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

   people.forEach(function(){
       console.log('something');
   });



 let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

 const logPerson = (person, index) => {
    console.log(`${index} - hi ${person}`);
 }
people.forEach(logPerson);

// people.forEach((person, index) => {
//     console.log(index, person);
// });


// get a reference to the 'ul'

const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(person => {
 // create html template
 html += `<li style="color: purple">${person}</li>`;
});


//  before convertation into an arrow function:

// people.forEach(function(person){
//     // create html template
//     html += `<li style="color: purple">${person}</li>`;
// });

console.log(html);

ul.innerHTML = html;

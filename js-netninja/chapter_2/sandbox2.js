// strings 
console.log('hello world!');

let email = 'sla@yarve.com';
 // string concatenation 
let firstName = 'Brenda';
let lastName = 'Lee';

let fullName = firstName + ' ' + lastName; 

console.log(fullName);


// getting characters 
console.log(fullName[0]);


// string length 
console.log(fullName.length);

// string methods

console.log(fullName.toUpperCase()); 
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@'); // semicolon added by me.
console.log(index);

// common string methods

// let email = 'sla@yarve.com';

// let result = email.lastIndexOf('a');

// let result = email.slice(2,5);

// let result = email.substr(4,10);

// let result = email.replace('a', 'av');

// console.log(result);

// ---------------------------

let radius = 10;
const pi = 3.14;

// console.log(radius, pi);

// math operators +, -, *, **, %

// console.log(10/2);
// let result = radius % 3;

// let result = pi * radius**2;
 
// let result = 5 * (10-3)**2;
// console.log(result);

// let likes = 10;
// likes = likes + 1; An alternative: likes++;
// likes++;
// likes += 10;
// likes *= 2;
// console.log(likes);

// NaN - not a number
// console.log(5 / 'hello');

// let result = 'the blog has ' + likes + ' likes';
// console.log(result);

// template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

// concatenation way

// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes'; 
// console.log(result);

// template string way

let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

// creating html templates

let ninjas = ['shaun', 'ryu', 'chun-li'];

// ninjas[1] = 'ken';
// console.log(ninjas [1]);

// let ages = [20,25,30,35];
// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30,20];
// console.log(random);

// console.log(ninjas.length);

// array methods

// let result = ninjas.join(',  ');

// let result = ninjas.indexOf('chun-li');

// let result = ninjas.concat(['ken', 'crystal']);

// let result = ninjas.push('ken');
// result = ninjas.pop('');
// console.log(result);

// null & undefined

// let age = null;
// console.log(age, age + 3, `the age is ${age}`);




// booleans & comparisons
console.log(true, false, "true", "false");

// methods can return booleans
let email = 'sla@yarve.com';
let names = ['mario', 'luigi', 'toad'];

// let result = email.includes('@');
// let result = names.includes('bowser');

// console.log(result);

// comparison operators
let age = 25;

// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 30);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 25);
// console.log(age >= 25);

// let name = 'sla';

// console.log(name == 'sla');
// console.log(name == 'Sla');
// console.log(name > 'crystal');
// console.log(name > 'Sla');
// console.log(name > 'Crystal');

// let age = 25;

// loose comparison (different types can still be equal)

// console.log(age == 25);
// console.log(age == '25');

// console.log(age != 25);
// console.log(age != '25');

// strict comparison (different types cannot be equal)
// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== 25);
// console.log(age !== '25');


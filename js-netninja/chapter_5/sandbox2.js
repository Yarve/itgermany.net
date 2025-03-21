// object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@yarve.com',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite']
};

console.log(user);
console.log(user.name);

// user.age = 35;
console.log(user.age);

console.log(user['location']); 
user['name'] = 'chun-li';
console.log(user.name);

console.log(typeof user);

// user.login();
// user.logout();

// object literals

let user = {  // 01
    name: 'crystal',
    age: 30,
    email: 'crystal@yarve.com',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'], // 02
    login: () => {
        console.log('the user logged in');
    },
logout: function(){
    console.log('the user logged out');
},
logBlogs: function(){
console.log(this); // 2.1
}
};

user.logBlogs();  // 03

console.log(this); // 04

// user.login();
// user.logout();

// Math object

// console.log(Math); 
// console.log(Math.PI); 

// const area = 7.7;

// console.log(Math.round(area)); 
// console.log(Math.floor(area)); 
// console.log(Math.ceil(area)); 
// console.log(Math.trunc(area)); 

// random numbers

const random = Math.random();

// console.log(random);
console.log(Math.round(random * 1000));


// let user = {
//     name: 'crystal',
//     age: 30,
// };

// console.log(user.name);

// const blogs = [
//     { title:'why mac & cheese rules', likes: 30 },
//     { title:'10 things to make with marmite', likes: 50 }
// ];
// console.log(blogs);


// stack & heap

// function sayHello() {
//     const name = "Alice";
//     const message = "Hello, " + name;
//     console.log(message);
// }

// sayHello();

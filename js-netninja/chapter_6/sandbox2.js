// const para = document.querySelector('p');

// const para = document.querySelector('div.error'); // ab

const paras = document.querySelectorAll('p'); 
const errors = document.querySelectorAll('.error'); 

console.log(errors);


// paras.forEach(para => {
//     console.log(para);
// });

// console.log(paras[2]);


lection 48:
// get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);

// get elements by their class name

// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);

// get elements by their tag name

// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);


// get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);


// get elements by their class name

// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);

// get elements by their tag name

const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);


Lection #49

const link = document.querySelector('a');

console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://yarve.com');
link.innerText = "Yarve's Blog!";

const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color:green');

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>JS-6 Net Ninja</title>
</head>
<body>
    <h1>JS-6 The DOM</h1>
<!-- <div>
    <p>Hi world</p>
    
    <p class="error">this is an error message</p>
</div>
<div class="error">this is another error</div>
-->
<a href="https://www.google.com">Link to smth cool...</a>

<p class="error">Lorem ipsum</p>

    <script src="sandbox.js"></script>
</body>
</html>

Lection #50

// const title = document.querySelector('h1');

// title.setAttribute('style', 'margin:50px;');

// console.log(title.style);
// console.log(title.style.color); 

// title.style.margin = '50px'; 
// title.style.color = 'crimson';
// title.style.fontSize = '60px'; 
// title.style.margin = ''; 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>JS-6 Net Ninja</title>
</head>
<body>
    <h1 style="color:orange;">JS-6 The DOM</h1>
<!-- <div>
    <p>Hi world</p>
    
    <p class="error">this is an error message</p>
</div>
<div class="error">this is another error</div>
-->

<script src="sandbox.js"></script>
</body>
</html>

// const title = document.querySelector('h1');

// title.setAttribute('style', 'margin:50px;');

// console.log(title.style);
// console.log(title.style.color); 

// title.style.margin = '50px'; 
// title.style.color = 'crimson';
// title.style.fontSize = '60px'; 
// title.style.margin = ''; 

Lection #51
// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

// const paras = document.querySelectorAll('p');

// paras.forEach(p => {
//    if(p.textContent.includes('error')){
//        p.classList.add('error');
//    } else if (p.textContent.includes('success')){
//        p.classList.add('success');
//    }
// });

// const title = document.querySelector('.title');

// title.classList.toggle('test'); 
// title.classList.toggle('test'); 

<!--   <link rel="stylesheet" href="styles-netninja-170924.css"

<h1 style="color:orange;">JS-6 The DOM</h1>
<p>Hi world</p>
<div class="error">this is another error</div>
<p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Eligendi assumenda illo odio.
</p>
-->

Lesson #52

const article = document.querySelector('article');

// console.log(article.children);
// console.log(Array.from(article.children));
// console.log(article.children);

// Array.from(article.children).forEach(child => {
//     child.classList.add('article-element');
//  });

const article = document.querySelector('article');

const title = document.querySelector('h2');

console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);

console.log(title.previousElementSibling);

// chaining

console.log(title.nextElementSibling.parentElement.children);

Lesson #53

// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log('you clicked me')
// });

// const items = document.querySelectorAll('li');

// items.forEach(item => {
// item.addEventListener('click', e => {
// console.log('item clicked');
// console.log(e);
// console.log(e.target);
// console.log(item);
// e.target.style.textDecoration = 'line-through';
// });
// });
/*

Lesson #55

const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'smth new to do';
    ul.prepend(li);
});

const items = document.querySelectorAll('li');

items.forEach(item => {
item.addEventListener('click', e => {
e.target.remove();

});
});

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge"<title>JS-6 Net Ninja</title>
<title>JS-6 The DOM</title>
<style>
li{
list-style-type: none;
max-width: 200px;
padding: 8px;
margin: 8px auto;
background: #eee; 
border: 1px dotted #ddd;
}
</style>
</head>
<body>
<h1 class="title">JS-6 The DOM</h1>
<h1 class="title">Todos</h1>
 <ul>
<li>buy milk</li>
<li>read a book</li>
<li>play the guitar</li>
<li>pay the bills :(</li>
 </ul>

 <button>click me</button>

<script src="sandbox.js"></script>
</body>
</html>


Lesson #56

<!--
<style>
.box{
width: 200px;
height: 200px;
margin: 10px 0;
background: #eee; 
text-align: center;
padding: 20px;
}
</style>
</head>
<body>
<p class="copy-me">Lorem ipsum dolor sit amet consectetur</p>
<div class="box">move the mouse around this box</div>

<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
-->
*/
// const copy = document.querySelector('.copy-me');

// copy.addEventListener('copy', () => {
//     console.log('OI! my content is copyright');
// });

// const box = document.querySelector('.box');

// box.addEventListener('mousemove', e => {
   // console.log(e);
 //  console.log(e.offsetX, e.offsetY);
//  box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`;
// });

// document.addEventListener('wheel', e => {
//     console.log(e.pageX, e.pageY);
// })
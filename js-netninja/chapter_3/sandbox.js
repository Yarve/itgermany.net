// variables & block scope
const age = 30; // global variable

if(true){ // start of local scope
const age = 40;
const name = 'shaun';
console.log('inside 1st code block: ', age, name);

if(true){ // nested code block
    const age = 50;
    console.log('inside 2nd code block: ', age);
    }
} // end of local scope

console.log('outside the code block ', age, name);
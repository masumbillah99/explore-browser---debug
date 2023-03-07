/** different type of reference error */

const person = {
    name: 'Babul mia',
    age: 32,
}

// variable is not defined
const a = 'abc';
// console.log(ab);

// x is block variable not global
function xyz() {
    let x = 5;
}
// console.log(x);

// cannot access variable before initialization
// console.log(name);
const name = 'imran';
// let name = 'imran';
// var name = 'imran';           // hoisting

// cannot access function before initailization
// console.log(add2(2, 3));        // hoisting
function add(a, b) {
    return a + b;
}

const add2 = (c, d) => c + d;


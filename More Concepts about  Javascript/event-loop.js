// javascript event loop and concurrency

function a() {
    console.log('a');
    b();
    console.log('aa');
}
function b() {
    console.log('b');
    c();
    console.log('bb');
}
function c() {
    console.log('c');
    console.log('cc');
}

function m() {
    console.log('m');
    n();
    console.log('mm');
}
function n() {
    console.log('n');
    o();
    console.log('nn');
}
function o() {
    console.log('o');
    console.log('oo');
}

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))

a();
m();

console.log('aaa');
console.log('bbb');

setTimeout(() => {
    console.log('ccc');
}, 2000);

console.log('ddd');
console.log('eee');
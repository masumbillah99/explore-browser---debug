// i++ vs ++i
// x++ vs ++x 

console.log(1);
console.log(2);

let num = 1;
const intervalId = setInterval(() => {
    // num++;
    console.log(++num);
    if (num === 10) {
        clearInterval(intervalId);
    }
}, 1000);

console.log(4);
console.log(5);
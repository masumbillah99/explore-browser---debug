let z = 5;

// err - 1
// if (z === '5' {
//     console.log(false);
// } else {
//     console.log(true);
// }

// err - 2
function m() {
    // console.log('mmm';
}
m();

function isBigger(num) {
    if (num > 5) {
        return true;
    }
    else {
        return false;
    }
}
const result = isBigger(11);
// console.log(result);

// const sum = a, b => a+b;     -error
const sum = (a, b) => a + b;
const result2 = sum(3, 2);
// console.log(result2);

const musk = {
    name: 'elon',
    // age: 53      -error
    age: 53,
    job: 'tesla',
}
// console.log(musk.age);

// for(let i=0; i<10 i++) {               // error
//     console.log(i);
// }

let nums = [3, 4, 65, 5];

// if (nums.length > 5) && (nums[0] === 5) {
// }

if (nums.length > 5 && nums[0] === 5) {
}
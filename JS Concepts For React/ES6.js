const numbers = [94, 30, 20, 48, 93];
const student = {
    name: 'Masum Billah',
    department: 'Computer',
    semester: 7,
};

// 1. template string
const about = `My name is ${student.name} semester of ${student.semester}`;
// console.log(about);

// 2. arrow function
// const getNum = () => 55;
const getNum = (num) => num + 55;
const isEven = x => x % 2 === 0;
// console.log(getNum(5));
// console.log(isEven(5));

// 3. spread operator
// create a new array from an older array and add an element
let newNumbers = [...numbers];
const newNumbersAdd = [...numbers, 09, 19, 39];
console.log(newNumbers);
newNumbers.push(100);
console.log(newNumbers);
console.log(newNumbersAdd);
// JSON => stringify, parse

const student = {
    name: 'Masum Billah',
    department: 'Computer',
    semester: 7,
};
// console.log(student);

const studentJson = JSON.stringify(student);
// console.log(studentJson);

const studentObj = JSON.parse(studentJson);
// console.log(studentObj);

// 2. fetch (async, await)
// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data))

// keys, values
const keys = Object.keys(student);
// console.log(keys);
const values = Object.values(student);
// console.log(values);

// for
const numbers = [94, 30, 20, 48, 93];
// numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of --- loop of on array like object
// for in --- loop of on object property
const products = [
    { name: 'Laptop', price: 33000, brand: 'Asus', color: 'Black' },
    { name: 'Tablet', price: 21000, brand: 'Iphone', color: 'Blue' },
    { name: 'Mobile', price: 15000, brand: 'Xiaomi', color: 'White' },
    { name: 'Watch', price: 3000, brand: 'Casio', color: 'Black' },
    { name: 'Sunglass', price: 700, brand: 'Lenovo', color: 'Blue' },
];

const newProduct = { name: 'Webcame', price: 700, brand: 'Lenovo', };

// copy products array and then add newProduct
const newProducts = [...products, newProduct];

// create a new array without one specific item
// remove phone means create a new array without the phone
const remaining = products.filter(p => p.name !== 'Mobile');
console.log(remaining);
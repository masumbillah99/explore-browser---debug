// everything about array

const products = [
    { name: 'Laptop', price: 33000, brand: 'Asus', color: 'Black' },
    { name: 'Tablet', price: 21000, brand: 'Iphone', color: 'Blue' },
    { name: 'Mobile', price: 15000, brand: 'Xiaomi', color: 'White' },
    { name: 'Watch', price: 3000, brand: 'Casio', color: 'Black' },
    { name: 'Sunglass', price: 700, brand: 'Lenovo', color: 'Blue' },
];

// array methods -- map, forEach, filter, find

// 1. map
const brands = products.map(product => product.brand);
// console.log(brands);
const prices = products.map(product => product.price);
// console.log(prices);

// 2. forEach
products.forEach((product) => product.color);

// 3. filter
const cheap = products.filter(product => product.price <= 5000);
const specificName = products.filter((product) => product.name.includes('o'));
// console.log(cheap);
// console.log(specificName);

// 4. find
const special = products.find((product) => product.name.includes('o'));
console.log(special);
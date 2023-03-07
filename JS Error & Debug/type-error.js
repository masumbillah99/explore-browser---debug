const nums = 5;
// nums.push(39);                // error-1

// let address;
// console.log(address.home);    // error-2
let address = { city: 'bBaria', code: 4560 }
// console.log(address.home.building);      // error-3
console.log(address?.home?.building);

const obj = {
    name: 'manus',
    age: 40,
}
// console.log(obj.age());

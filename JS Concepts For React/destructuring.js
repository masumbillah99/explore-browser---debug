const numbers = [94, 30,];
// const a = numbers[0];
// const b = numbers[1];

// ways of destructuring
const [a, b] = [94, 30];    // way - 1
const [c, d] = numbers;     // way - 2

// console.log(a, b);
// console.log(c, d);

function boxify(n1, n2) {
    const nums = [n1, n2];
    return nums;
}

// console.log(boxify(32, 59));
const [first, sec] = boxify(32, 59);
// console.log(first, sec);

const student = {
    name: 'Masum Billah',
    department: 'Computer',
    semester: 7,
    subjects: ['Cyber Security', 'E-commerce'],
};

const [firstSub, secSub] = student.subjects;

// object destructuring
const { name, age } = { name: 'Alu', age: 20, street: 'Vanga Nogor' };
// console.log(name, age);

const employee = {
    ide: 'vs code',
    designation: 'Developer',
    machine: 'Desktop',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 5.6,
        weight: 60,
        address: 'Kotbari',
        food: 'Alu Bortar ',
    }
}
const { machine, ide } = employee;
// console.log(machine, ide);
const { weight, address } = employee.specification;
console.log(weight, address);
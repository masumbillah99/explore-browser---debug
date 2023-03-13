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
console.log(keys);
const person = {
    name: 'Lal Nil',
    prof: 'Traffic Surgeon',
    address: 'Malibag',
    37: 'age',
    'son-name': 'Sobuj',
};

// dot notation
const prof1 = person.prof;

// bracket notation
const prof2 = person['prof'];
const prof3 = "prof";
// console.log(person[prof3]);

// console.log(person[37]);

// const son = person.son-name;        [this is wrong for accessing property]
const son = person["son-name"];     // ["this is right for accessing property"]
// console.log(son);

const x = 50;
const y = 100;
const obj = {
    x: x,
    y: y,
}

// object declaration shorthand
const obj1 = { x, y };
// console.log(obj1);

const name = "solimullah";
const area = "Dhaka";
const nobab = {
    name: name,
    area: area,
}

const nobab2 = { name, area };
// console.log(nobab2);

if (!{}) {
    console.log(false);;
} else {
    console.log(true);;
}

const adventurer = { name: 'Alice', cat: { name: 'Lucy' } };
const ratName = adventurer?.rat?.name;
console.log(ratName);

const per = null;
// console.log(per ? per : "person is null");

const obj3 = { a: 1 };
console.log(Object.keys(obj3).length === 0);
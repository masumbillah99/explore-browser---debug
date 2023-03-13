// 1. how to declare a variable using let and const 

// 2. 6 basic conditions: >, <, ===, !==, <=, >=
// multiple conditions: &&, or
// if-else if-ifelse-else (nested conditons)

// 3. array declare
//  index,
//  length, push
const numbers = [94, 30, 20, 48, 93];

// 4. loop declare (for, while)
/** 
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element);
}

let i = 0;
while (i < numbers.length) {
    const element = numbers[i];
    console.log(element);
    i++;
}
*/

// 5. function

// 6. Object
/** 
3 ways to access property by name
   - direct by property
   - access by property name string
   - access by property name in a variable
*/
const student = {
    name: 'Masum Billah',
    department: 'Computer',
    semester: 7,
};
console.log(student.semester);  // direct by property
console.log(student['semester']);   // access by property name string
const mySemester = 'semester';
console.log(student[mySemester]);   // access by property name in a variable
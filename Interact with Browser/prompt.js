// alert('Hey alert!');

const showAlert = () => {
    alert("Bondu, taka ase dar dite parbi, only 1000tk");
}

const lendMoney = () => {
    const result = confirm("Tumi taka dar diba kina bol");
    console.log(result);
    if (result === true) {
        alert('Tui amar kharap bondu');
    } else {
        console.log('DGM...tor khel khotom');
    }
}

// alert
// confirm

const getInfo = () => {
    const name = prompt("Tell me your name");
    console.log(name);
    if (name === null) {
        alert('naam na dile kaam nai.. jafooot');
    } else {
        console.log('Welcome to this world!');
    }
}

/** ১. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। 
যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে 
আউটপুট দেখাও 
*/
const doSum = () => {
    const input = prompt("Write a Number");
    if (input === null) {
        alert('Invalid input');
    } else {
        const inputParse = parseInt(input);
        const sum = inputParse + 200;
        alert("Result is : " + sum);
    }
}

/** 
২. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন 
দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা 
কনসোল লগ করে দেখাও 
*/
const showLocation = () => {
    const msg = confirm('Are you want to show your location');
    if (msg === true) {
        console.log(window.location.href);
    } else {
        console.log('Thak dekis na');
    }
}

/** 
৩. Cookies কি জিনিস। এইটা দিয়ে কি করা হয়। সেটা ইংরেজিতে ৫ থেকে ৭ লাইনের মধ্যে 
লিখে ফেলো। 
*/


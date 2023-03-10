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
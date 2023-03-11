// const hello = localStorage.getItem('hello');
// console.log(hello);

const setName = () => {
    localStorage.setItem("name", "Sakib Khan");
    console.log(localStorage);
}

const setAge = () => {
    window.localStorage.setItem("age", 40);
}



// const displayItem = () => {
//     const ul = document.getElementById('item-container');
//     const li = document.createElement('li');
//     li.innerText = `${setName()}`;
//     ul.appendChild(li);
// }

// displayItem();
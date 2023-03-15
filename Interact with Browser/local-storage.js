// const hello = localStorage.getItem('hello');
// console.log(hello);

// const setName = () => {
//     localStorage.setItem("name", "Sakib Khan");
//     console.log(localStorage);
// }

// const setAge = () => {
//     window.localStorage.setItem("age", 40);
// }

// const getItem = () => {
//     const ul = document.getElementById('item-container');
//     const li = document.createElement('li');
//     li.innerHTML = window.localStorage.getItem()
// }

// const displayItem = () => {
//     const ul = document.getElementById('item-container');
//     const li = document.createElement('li');
//     li.innerText = `${setName()}`;
//     ul.appendChild(li);
// }

// displayItem();

// -----------------------------------

const addInfo = () => {
    const nameField = document.getElementById('name-field');
    const name = nameField.value;
    const ageField = document.getElementById('age-field');
    const age = ageField.value;
    nameField.value = '';
    ageField.value = '';

    displayInfo(name, age);
    setInfoInLocalStorage(name, age);
}

const displayInfo = (name, age) => {
    const ul = document.getElementById('item-container');
    const li = document.createElement('li');
    li.innerText = `${name} : ${age}`;
    ul.appendChild(li);
}

const getStoredInfo = () => {
    let info = {};
    const storedInfo = localStorage.getItem('info');
    if (storedInfo) {
        info = JSON.parse(storedInfo);
    }
    return info;
}

const setInfoInLocalStorage = (name, age) => {
    const info = getStoredInfo();
    info[name] = age;
    const infoStringify = JSON.stringify(info);
    localStorage.setItem('info', infoStringify);
    // console.log(infoStringify);
}

const displayInfoFromLocalStorage = () => {
    const savedInfo = getStoredInfo();
    for (const name in savedInfo) {
        const age = savedInfo[name];
        displayInfo(name, age);
    }
}

displayInfoFromLocalStorage();
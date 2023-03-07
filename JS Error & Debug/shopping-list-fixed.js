// reference error-1
// const addInput = document.getElementById(add - field);
const addInput = document.getElementById('add-field');

const colorInput = document.getElementById("color-field");
const itemList = document.getElementById("item-list");

const listDiv = document.getElementById("list-div"); //for hiding/showing
const toggle = document.getElementById("toggle-button");
// syntax error-1
// const toggle  document.getElementById("toggle-button");

// add item
function addItem() {
    const lastPickedColor = colorInput.value;
    const li = document.createElement("li");
    li.innerHTML = addInput.value;
    li.style.color = lastPickedColor;

    // reference error-2
    // colorChange();
    changeColor();

    // type error-1
    // itemList.appendChild("li");
    itemList.appendChild(li);

    addInput.value = "";
}

// remove item
function removeItem() {
    // reference error-4  : cannot access before initialization
    // itemList.removeChild(li);
    let li = document.querySelector("li:last-child");
    itemList.removeChild(li);
}

// change color
function changeColor() {
    const List = document.querySelectorAll("li");
    const lastPickedColor = colorInput.value;
    // console.log(List);

    // syntax error-2
    // reference error-3  : length() is not a function
    // for (let i = 0; i < List.length() i++) {
    for (let i = 0; i < List.length; i++) {
        List[i].style.color = lastPickedColor;
    }
}

// uppercase
itemList.addEventListener("mouseover", (event) => {
    if (event.target.tagName == "LI") {
        event.target.style.textTransform = "uppercase";
    }
});

// lowercase
itemList.addEventListener("mouseout", (event) => {
    if (event.target.tagName == "LI") {
        event.target.style.textTransform = "lowercase";
    }
    // syntax error-3
    // }));
});

// hide/show list
function toggleButton() {
    if (listDiv.style.display == "none") {
        listDiv.style.display = "block";
        toggle.textContent = "Hide list";
    } else {
        listDiv.style.display = "none";
        toggle.textContent = "Show list";
    }
}       // syntax error-4


let tasks = [];

const button = document.querySelector("button");
const headerText = document.querySelector("header p");

const input = document.querySelector(".todo input");
const addBtn = document.querySelector(".todo-input button");
const list = document.querySelector(".todo-list");

console.log(input);
console.log(addBtn);
console.log(list);

// Event Listener

let isReset = true;

button.addEventListener("click", () => {
    if(isReset) {
        headerText.textContent = "I'm rebuilding, one day at a time";
        button.textContent = "Keep Going";
    } else {
        headerText.textContent = "You didn't lose it. You paused.";
        button.textContent = "Start Again";
    }

    isReset = !isReset;
});

// EVent Listener to add  a Todo item

addBtn.addEventListener("click", () => {
    if(input.value === "") return;

    const li = document.createElement("li");
    li.textContent = input.value;

    li.addEventListener("click", () => {
        li.remove();
    });

    list.appendChild(li);
    input.value = "";
});


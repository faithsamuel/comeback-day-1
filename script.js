let tasks = [];

const button = document.querySelector("button");
const headerText = document.querySelector("header p");

const input = document.querySelector(".todo input");
const addBtn = document.querySelector(".todo-input button");
const list = document.querySelector(".todo-list");

const storedTasks = localStorage.getItem("tasks");

if(storedTasks) {
    tasks = JSON.parse(storedTasks);
    renderTasks();
}


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

// Event Listener to add  a Todo item

// addBtn.addEventListener("click", () => {
//     if(input.value === "") return;

//     const li = document.createElement("li");
//     li.textContent = input.value;

//     li.addEventListener("click", () => {
//         li.remove();
//     });

//     list.appendChild(li);
//     input.value = "";
// });



// Press Enter to add a task.
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addBtn.click();
    }
});

// New Event Listener to save Tasks to Local storage

addBtn.addEventListener("click", () => {
    if (input.value === "") return;

    const taskText = input.value;

    tasks.push(taskText);
    saveTasks();
    renderTasks();

    input.value = "";
});

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;

        li.addEventListener("click", () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });

        list.appendChild(li);
    });
}

const sampleTasks = [
    {id: 1, title:"Pray" },
    {id: 2, title:"Code" },
    {id: 3, title:"Rest" },
    
];

const mappedTasks = sampleTasks.map((task) => {
    return task.title;
})

console.log(mappedTasks);


//***********Renamed variables ************ */

// tasks → todoItems
// list → todoList
// input → taskInput
// addBtn → addTaskButton

//*********************** */

let todoItems = [];

const button = document.querySelector("button");
const headerText = document.querySelector("header p");

const taskInput = document.querySelector(".todo input");
const addTaskButton= document.querySelector(".todo-input button");
const todoList = document.querySelector(".todo-list");

const storedTasks = localStorage.getItem("todoItems");

if(storedTasks) {
    todoItems = JSON.parse(storedTasks);
    renderTasks();
}


//map() DOM rendering 

function renderSampleTasks() {
    todoList.innerHTML = "";

    sampleTasks.map((task) => {
        const li = document.createElement("li");
        li.textContent = task.title;
        todoList.appendChild(li);
    });
}

renderSampleTasks();

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
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTaskButton.click();
    }
});

// New Event Listener to save Tasks to Local storage

addTaskButton.addEventListener("click", () => {
    if (taskInput.value === "") return;

    const taskText = taskInput.value;

    todoItems.push(taskText);
    saveTasks();
    renderTasks();

    taskInput.value = "";
});

function saveTasks() {
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
}

function renderTasks() {
    todoList.innerHTML = "";

    todoItems.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;

        li.addEventListener("click", () => {
            removeTask(index);
        });

        todoList.appendChild(li);
    });
}

function removeTask(index) {
    todoItems.splice(index, 1);
    saveTasks();
    renderTasks();
}
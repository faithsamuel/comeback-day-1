console.log("Day3: Javascript is awake");

const button = document.querySelector("button");
const headerText = document.querySelector("header p");

console.log(button);
console.log(headerText);

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
let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

let string = "";

function updateDisplay() {
    input.value = string;
}

function appendValue(value) {
    string += value;
    updateDisplay();
}

function calculate() {
    try {
        string = eval(string).toString();
        updateDisplay();
    } catch (error) {
        string = "";
        input.value = "Error";
    }
}

function clearDisplay() {
    string = "";
    updateDisplay();
}

function deleteLast() {
    string = string.substring(0, string.length - 1);
    updateDisplay();
}

document.addEventListener("keydown", (event) => {
    const key = event.key;

    if ("0123456789+-*/.".includes(key)) {
        appendValue(key);
    } 
    else if (key === "Enter") {
        event.preventDefault();
        calculate();
    } 
    else if (key === "Escape") {
        clearDisplay();
    } 
    else if (key === "Backspace") {
        deleteLast();
    }
});

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const value = e.target.innerHTML;

        if (value === "=") {
            calculate();
        } 
        else if (value === "AC") {
            clearDisplay();
        } 
        else if (value === "DEL") {
            deleteLast();
        } 
        else {
            appendValue(value);
        }
    });
});
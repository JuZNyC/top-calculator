let firNum;
let secNum;
let oper;
let opIgnore = ["AC", "bck", ".", "="]
let operation = [];

function add (a, b) {
    return a + b;
};

function subtract (a, b) {
    return a - b;
};

function multiply (a, b) {
    return a * b;
};

function divide (a, b) {
    return a / b;
};

function mod (a, b) {
    return a % b;
};

function operate (operation) {
    firNum = parseFloat(operation.shift());
    oper = operation.shift();
    secNum = parseFloat(operation.shift());
    console.log(`${firNum} ${oper} ${secNum}`);
    if (oper == "+") {
        return add(firNum, secNum);
    }
    else if (oper == "-") {
        return subtract(firNum, secNum);
    }
    else if (oper == "x") {
        return multiply(firNum, secNum);
    }
    else if (oper == "/") {
        return divide(firNum,secNum);
    }
    else {
        return mod(firNum, secNum);
    };
};

const container = document.querySelector("#container");
const display = container.querySelector("#display");

const numBut = container.querySelectorAll(".num-button");
const opBut = container.querySelectorAll(".op-button");
const perBut = container.querySelector("#period-button");
const acBut = container.querySelector("#ac-button");
const bckBut = container.querySelector("#back-button");

numBut.forEach(button => {
    button.addEventListener("click", () => {
        if (display.innerText.length < 11) {
            display.innerText += button.innerText;
        }
        else if (display.innerText.length < 11) {
            display.innerText = "";
            operation = [];
            display.innerText += button.innerText;
        };
    });
});

opBut.forEach(button => {
    button.addEventListener("click", () => {
        if (!opIgnore.includes(button.innerText)  && display.innerText.length > 0, operation.length == 0) {
            operation.push(display.innerText);
            operation.push(button.innerText);
            display.innerText = "";
        }
        else if (button.innerText == "=" && operation.length > 1 && display.innerText.length > 0 && !operation.includes("=")) {
            operation.push(display.innerText);
            display.innerText = operate(operation);
            operation.push(display.innerText);
        } else if (!opIgnore.includes(button.innerText) && operation.length == 1) {
            operation.push(button.innerText);
            display.innerText = "";
        }
    });
});

perBut.addEventListener("click", () => {
    if (!display.innerText.includes(".")) {
        display.innerText += perBut.innerText;
    }
});

acBut.addEventListener("click", () => {
    display.innerText = "";
    operation = [];
});

bckBut.addEventListener("click", () => {
    display.innerText = display.innerText.slice(0, -1);
});
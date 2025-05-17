let firNum;
let secNum;
let oper;

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

function operate (a, b, c) {
}

const container = document.querySelector("#container");
const display = container.querySelector("#display");

const numBut = container.querySelectorAll(".num-button");
const opBut = container.querySelectorAll(".op-button");
const perBut = container.querySelector("#period-button");
const acBut = container.querySelector("#ac-button");

numBut.forEach(button => {
    button.addEventListener("click", () => {
        if (display.innerText.length < 11) {
            display.innerText += button.innerText;
        };
    });
});

opBut.forEach(button => {
    button.addEventListener("click", () => {
        if (button.innerText != "=" && display.innerText.length > 0) {
            operation.push(display.innerText);
            operation.push(button.innerText);
            display.innerText = "";
        };
    });
});

perBut.addEventListener("click", () => {
    if (!display.innerText.includes(".")) {
        display.innerText += perBut.innerText;
    }
});

acBut.addEventListener("click", () => {
    display.innerText = "";
    firNum = undefined;
    secNum = undefined;
    oper = undefined;
});
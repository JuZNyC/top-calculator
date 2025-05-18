let firNum;
let secNum;
let oper;
let result;

const container = document.querySelector("#container");
const display = container.querySelector("#display");
const numBut = container.querySelectorAll(".num-button");
const opBut = container.querySelectorAll(".op-button");
const perBut = container.querySelector("#period-button");
const acBut = container.querySelector("#ac-button");
const bckBut = container.querySelector("#back-button");
const eqBut = container.querySelector("#equal-button");
const pnBut = container.querySelector("#pos-neg-button");

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
    if (b == 0) {
        return "Error";
    }
    return a/b;
};

function mod (a, b) {
    return a % b;
};

function operate () {
    firNum = parseFloat(firNum);
    secNum = parseFloat(secNum);
    console.log(`operate log: ${firNum} ${oper} ${secNum}`);
    if (oper == "+") {
        result = add(firNum, secNum);
    }
    else if (oper == "-") {
        result = subtract(firNum, secNum);
    }
    else if (oper == "x") {
        result = multiply(firNum, secNum);
    }
    else if (oper == "/") {
        result = divide(firNum,secNum);
    }
    else {
        result = mod(firNum, secNum);
    };
    firNum = result;
    return result;
};

numBut.forEach(button => {
    button.addEventListener("click", () => {
        if (display.innerText.length < 11 && !result) {
            display.innerText += button.innerText;
        }
        else if(display.innerText.length < 11 && result) {
            firNum = result;
            result = undefined;
            secNum = undefined;
            display.innerText = "";
            display.innerText = button.innerText;
        }    
        console.log(`numBut\nFirst: ${firNum} Second: ${secNum} Operator: ${oper}`);
    });
});

opBut.forEach(button => {
    button.addEventListener("click", () => {
        if (!firNum) {
            firNum = display.innerText;
            oper = button.innerText;
            display.innerText = "";
        }
        else {
            display.innerText = "";
            oper = button.innerText;
        }
        console.log(`opBut\nFirst: ${firNum} Second: ${secNum} Operator: ${oper}`);
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
    result = undefined;
});

bckBut.addEventListener("click", () => {
    display.innerText = display.innerText.slice(0, -1);
});

eqBut.addEventListener("click", () => {
    if (display.textContent.length > 0 && firNum) {
        secNum = display.textContent
        display.textContent = String(operate()).slice(0,11);
    };
    console.log(`eqBut\nFirst: ${firNum} Second: ${secNum} Operator: ${oper}`);
});

pnBut.addEventListener("click", () => {
    display.innerText = parseFloat(display.innerText) * -1;
});

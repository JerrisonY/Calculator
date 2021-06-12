const display = document.querySelector('.screen')
const buttons = document.querySelector('.button-container')

let firstValue;
let secondValue;
let curOperator;
let finalValue;

let add = (num1, num2) => num1 + num2;

let subtract = (num1, num2) => num1 - num2;

let multiply = (num1, num2) => num1 * num2;

let divide = (num1, num2) => num1 / num2;
 

let operate = (a, b, operator) => {
    switch(operator) {
        case 'add', '+':
            return add(a,b);
            break;
        case 'subtract', '-':
            return subtract(a,b);
            break;
        case 'multiply', '*':
            return multiply(a,b);
            break;
        case 'divide', '/':
            if (b === 0) {
                return 'IMPOSSIBLE';
            } else {
                return divide(a,b);
            }
    }
}

let deleteNumber = () => display.textContent = display.textContent.slice(0,-1);

let clear = () => {
    display.textContent = '';
    firstValue = '';
    secondValue = '';
    curOperator = '';
}

// *** event delegation for all calc buttons ***
buttons.addEventListener('click', e => {
    
    if (e.target.matches('.calc-btn') && display.textContent.length <= 11) { // if button pressed has the .calc-btn class

        const key = e.target.textContent;
        let dSet = e.target.dataset.type;
        let curScreen = display.textContent;
        let numRegex = /^[0-9]*$/; // regex that contains numbers between 0-9

        if (numRegex.test(key)) {  // if button contains a number from numRegex 
            if (curScreen === '0') {
                display.textContent = key;
            } else {
                display.textContent = curScreen + key;
            } 
        }

        if (dSet === 'operator') { // if button pressed has a dataset.type = 'operator'
            firstValue = curScreen; // stores first number 
            curOperator = e.target.dataset.op; // stores operand
            display.textContent = ''; // resets screen
        }

        if (key === '.') {
            if (!display.textContent.includes('.')) { // only runs if no '.' exists already
                display.textContent = curScreen + '.';
            }
        }

        if (key === 'C') {
            clear();
        }

        if (!key) {
            deleteNumber();
        }

        if (key === '=') {
            secondValue = curScreen; // when '=' is pressed, stores current screen as secondValue
            finalValue = operate(+firstValue, +secondValue, curOperator);

            if (finalValue.toString().length >= 12) { // checks if output will be 12 or more characters
                display.textContent = finalValue.toFixed(2); // if it is, round to 2 decimals
            } else {
                display.textContent = finalValue;
            }
        }
    }
});

// *** Keyboard inputs ***
let keyInput = (e) => {

    let curScreen = display.textContent;

    if (e.key >= 0 && e.key <= 9 && curScreen === '0') {
        display.textContent = e.key;
    } else if (e.key >= 0 && e.key <= 9) {
        display.textContent += e.key;
    }

    if (
        e.key === '+' ||
        e.key === '-' ||
        e.key === '*' ||
        e.key === '/'
        ) {
        firstValue = curScreen;
        curOperator = e.key;
        display.textContent = '';
    }

    if (e.key === '.') {
        if (!display.textContent.includes('.')) {
            display.textContent = curScreen + '.';
        }
    }

    if (e.key === 'Backspace') {
        deleteNumber();
    }

    if (e.key === 'c') {
        clear();
    }

    if (e.key === '=' || e.key === 'Enter') {
        secondValue = curScreen;
        finalValue = operate(+firstValue, +secondValue, curOperator);

        if (finalValue.toString().length >= 12) { 
            display.textContent = finalValue.toFixed(2); 
        } else {
            display.textContent = finalValue;
        }
    }
};

document.addEventListener('keydown', keyInput);


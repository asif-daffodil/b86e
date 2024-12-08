const display = document.querySelector('.display');
const topButtons = document.querySelector('.topButtons');
const numberButtons = document.querySelector('.numberButtons');
const operatorButtons = document.querySelector('.operatorButtons');

let isOn = false;
let previousValue = 0;
let operator = null;



function calculate(a, b, operator) {
    if (operator === '+') return a + b;
    if (operator === '-') return a - b;
    if (operator === '*') return a * b;
    if (operator === '/') return b !== 0 ? a / b : 'Error'; 
    return b;
}


// Turn ON (AC Button)
topButtons.children[0].addEventListener('click', () => {
    display.textContent = '0';
    isOn = true;
    previousValue = 0;
    operator = null;
});

// Turn OFF (Off Button)
topButtons.children[1].addEventListener('click', () => {
    display.textContent = null;
    isOn = false;
    previousValue = 0;
    operator = null;
});

// Clear Last Entry (C Button)
topButtons.children[2].addEventListener('click', () => {
    if (isOn) {
        display.textContent = display.textContent.slice(0, -1);
        if (display.textContent.length === 0) {
            display.textContent = '0';
        }
    }
});

// Handle Number Buttons
Array.from(numberButtons.children).forEach(element => {
    element.addEventListener('click', () => {
        if (isOn) {
            if (display.textContent === '0') {
                display.textContent = element.textContent;
            } else {
                display.textContent += element.textContent;
            }
        }
    });
});

// Handle Operator Buttons
Array.from(operatorButtons.children).forEach(element => {
    element.addEventListener('click', () => {
        if (isOn) {
            const currentValue = parseFloat(display.textContent);

            if (['+', '-', '*', '/'].includes(element.textContent)) {
                // If an operator button is clicked
                if (operator && previousValue !== null) {
                    previousValue = calculate(previousValue, currentValue, operator);
                    display.textContent = previousValue;
                } else {
                    previousValue = currentValue;
                }
                operator = element.textContent;
                display.textContent = '0';
            } else if (element.textContent === '=') {
                // If the equals button is clicked
                if (operator && previousValue !== null) {
                    const result = calculate(previousValue, currentValue, operator);
                    display.textContent = result;
                    previousValue = null;
                    operator = null;
                }
            }
        }
    });
});

// Calculation Function


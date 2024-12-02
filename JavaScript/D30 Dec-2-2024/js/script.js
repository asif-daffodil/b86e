const display = document.querySelector('.display');
const topButtons = document.querySelector('.topButtons');
const numberButtons = document.querySelector('.numberButtons');
const operatorButtons = document.querySelector('.operatorButtons');

let isOn = false;
let previousValue = 0;
let currentValue = 0;
let operator = null;
let isNewValue = false;

topButtons.children[0].addEventListener('click', () => {
    display.textContent = 0;
    isOn = true;
});

topButtons.children[1].addEventListener('click', () => {
    display.textContent = null;
    isOn = false;
    previousValue = 0;
    currentValue = 0;
    operator = null;
    isNewValue = false;
});

topButtons.children[2].addEventListener('click', () => {
    if (isOn) {
        display.textContent = display.textContent.slice(0, -1);
        if (display.textContent === '') {
            display.textContent = 0;
        }
    }
});

Array.from(operatorButtons.children).forEach(element => {
    element.addEventListener('click', () => {
        if (isOn) {
            if (previousValue == 0) {
                previousValue = parseFloat(display.textContent);
                operator = element.textContent;
                isNewValue = true;
            } else {
                if(element.textContent != '=') {
                currentValue = parseFloat(display.textContent);
                previousValue = eval(previousValue + operator + currentValue);
                display.textContent = previousValue;
                operator = element.textContent;
                isNewValue = true;
                }else{
                    previousValue = eval(previousValue + operator + parseFloat(display.textContent));
                    display.textContent = previousValue;
                    operator = null;
                    isNewValue = true;
                    previousValue = 0;
                }
            }
        }
    });
});


Array.from(numberButtons.children).forEach(element => {
    element.addEventListener('click', () => {
        if (isOn) {
            if (isNewValue) {
                display.textContent = element.textContent;
                isNewValue = false;
            } else {
                if (display.textContent === '0') {
                    display.textContent = element.textContent;
                } else {
                    display.textContent += element.textContent;
                }
            }
        }
    });
});

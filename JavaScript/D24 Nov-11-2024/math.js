// Math 
// Math is a built-in object that has properties and methods for mathematical constants and functions. It’s not a function object.
// Math works with the Number type. It doesn't work with BigInt.

// console.log(Math.PI); // 3.141592653589793
// console.log(Math.E); // 2.718281828459045
/* console.log(Math.round(Math.random() * 10));
console.log(Math.floor(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10)); */

// random css hex color 
function changeColor () {
    var hexNumber = "0123456789ABCDEF";
    var randomColor = "#";
    for (var i = 0; i < 6; i++) {
        randomColor += hexNumber[Math.floor(Math.random() * 16)];
    }
    console.log(randomColor);
    document.body.style.backgroundColor = randomColor;
}

// Math.abs()

console.log(Math.abs(-10)); // 10

// Math.ceil()
console.log(Math.ceil(10.1)); // 11

// Math.floor()
console.log(Math.floor(10.9)); // 10

// Math.round()
console.log(Math.round(10.5)); // 11

// Math.max()
console.log(Math.max(10, 20, 30)); // 30

// Math.min()
console.log(Math.min(10, 20, 30)); // 10

// Math.pow()
console.log(Math.pow(2, 3)); // 8

// Math.sqrt()
console.log(Math.sqrt(64)); // 8

// Math.cbrt()
console.log(Math.cbrt(8)); // 2
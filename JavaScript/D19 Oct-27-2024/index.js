//  data types
//  primitive data types
//  1. Number
//  2. String
//  3. Boolean
//  4. Undefined
//  5. Null
//  6. Symbol

//  non-primitive data types
//  1. Object
//  2. Array
//  3. Function

//  Number
var studentAge = 25;
console.log(typeof studentAge);

//  String
var studentName = "John Doe";
console.log(typeof studentName);

//  Boolean
var isStudent = true;
console.log(typeof isStudent);

//  Undefined
var studentRoll;
console.log(typeof studentRoll);

//  Null
var studentClass = null;
console.log(typeof studentClass);

//  Symbol
var studentSymbol = Symbol('This is a symbol');
console.log(typeof studentSymbol);

//  Object
var student = {
    name: 'John Doe',
    age: 25,
    isStudent: true
}
console.log(typeof student);

var st = {name: "Kamla", age: 22, city: "Tangail"}


//  Array
var studentArray = ["Kamal", 22, false];
console.log(typeof studentArray);

//  Function
function studentInfo () {
    console.log('This is a function');
} 

console.log(typeof studentInfo);


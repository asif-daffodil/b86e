
function myFunc (fname = "Hero", lname = "Alam") {
    return fname + " " + lname;
}

console.log(myFunc("Zakir", "Hossain"));
console.log(myFunc("Yasin", "Arafat"));
console.log(myFunc());
console.log(myFunc("Zero"));

// sum of two numbers
function sum(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        console.log("Please provide numbers");
        return;
    }
    console.log("Total : " + (a + b));
}

sum(10, 20);
sum("haha", "hoho");
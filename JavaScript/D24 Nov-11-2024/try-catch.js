// try catch block

function test(x) {
    try {
        if (x == 10) {
            return "x is 10";
        }
        throw new Error("x is not 10");
    } catch (e) {
        return  e.message;
    } 
}

console.log(test(15));


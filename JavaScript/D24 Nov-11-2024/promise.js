// create promise
var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('Zakir vai family saho picnic e jacche');
    }, 5000);
});

/* promise.then(function(value) {
    console.log(value);
}); */

console.log("Zakir vai family saho picnic e jacche na, karon taka nai");

// Async Await
async function myAsyncFunction() {
    var val = await promise;
    console.log(val);
}

myAsyncFunction();
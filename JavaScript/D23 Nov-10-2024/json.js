var myJson = {
    name: "John",
    age: 31,
    city: "New York",
    myDetails: function() {
        return "My name is " + this.name + " and I live in " + this.city + " and I am " + this.age + " years old";
    },
    friendList : ["Kamal", "Jamal", "Rahman"],
    isMarried : true,
    myCar : {
        brand : "Toyota",
        model : "Corolla",
        year : 2020
    }
}
myJson.name = "Asif Abir";
myJson.country = "Bangladesh";
console.log(myJson.name); // John
console.log(myJson.myDetails()); // My name is John and I live in New York and I am 31 years old
console.log(myJson.friendList[0]); // Kamal
console.log(myJson.myCar.model); // Corolla

var myStringJson =  JSON.stringify(myJson);

console.log(myStringJson);

var myParsedJson = JSON.parse(myStringJson);

console.log(myParsedJson);
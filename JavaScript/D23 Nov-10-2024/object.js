class myClass {
    //property
    myName = "Asif Abir";
    myCity = "Dhaka";

    //method
    myDetails(age) {
        return "My name is " + this.myName + " and I live in " + this.myCity + " and I am " + age + " years old";
    }

    //constructor
    constructor() {
        console.log("Constructor called");
    }
}

// instance of the class
var myObj = new myClass;

// accessing the property
console.log(myObj.myName); // Asif Abir

// accessing the method
console.log(myObj.myDetails(100)); // My name is Asif Abir and I live in Dhaka
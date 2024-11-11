// array of json
var normalArray = ["Rahim", 123, true, ["Kamal", "Jamal", "Rahman"], {isStudent: true, age: 12}];

var students = [
    {
        name: "Rahim",
        age: 12,
        city: "Dhaka",
    },
    {
        name: "Karim",
        age: 15,
        city: "Chittagong",
    },
    {
        name: "Rahima",
        age: 10,
        city: "Khulna",
    }
];

students.forEach(function(student){
    console.log(student.name);
});
var studentInfo = ["Rafi", "Shukrabad", 23, "Male", "Web Developer", true];
console.log(studentInfo[2]);

// 

studentInfo.push("Bangladesh");
studentInfo.push("Ed Sir", "Asad Sir");
studentInfo.pop();
studentInfo.unshift("Mr.", "Md");
studentInfo.shift();
studentInfo.splice(2, 2, "Dhaka");
// console.log(studentInfo);
console.log(studentInfo.length);
console.log(studentInfo.indexOf("Rafi"));
console.log(studentInfo.includes("Rafi"));
console.log(typeof studentInfo.join(" "));
//  var str = studentInfo.join(",");
//  console.log(str);
// console.log(str.split(","));

// var test = "I,am,a,student,of,programming,language,in,JavaScript";

var a = 0;
while(a < studentInfo.length){
    console.log(studentInfo[a]);
    a++;
}

// demo array from my student
var cities = ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Sylhet", "Barishal", "Rangpur", "Mymensingh"];

for (var i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}

cities.forEach(function(city, index){
    console.log(city + " " + index);
});

// map
cities.map(function(city, index){
    console.log(city + " " + index);
});

// filter
var filterCity = cities.filter(function(city){
    return city.length < 10;
});

console.log(filterCity);

var sarc = [["BD", "DHK", "TK"], ["IND", "DEL", "MUM"], ["USA", "NY", "LA"]];
console.log(sarc[1][1]);

for (var i = 0; i < sarc.length; i++) {
    for (var j = 0; j < sarc[i].length; j++) {
        console.log(sarc[i][j]);
    }
}

sarc.forEach(function(a){
    a.forEach(function(b){
        console.log(b);
    });
});



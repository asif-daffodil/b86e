var age = 80;

if (age <= 12 && age >= 0) {
    console.log("You are a baby!");
}else if (age <= 19 && age > 12) {
    console.log("You are a teenager!");
}else if (age <= 30 && age > 19) {
    console.log("You are a young adult!");
}else if (age <= 64 && age > 30) {
    console.log("You are an adult!");
}else if (age >= 65 && age <= 130) {
    console.log("You are a senior!");
}else{
    console.log("You are not in this world!");
}

// switch case
var day = "Monday";

switch (day) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}


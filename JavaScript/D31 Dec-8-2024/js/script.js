const students = ["John", "Jane", "Jack", "Jill"];  

const [student1, student2, student3, student4] = students;

console.log(student4); // John

const studentInfo = {
    name: "John",
    age: 25,
    country: "Canada",
    city: "Toronto"
}

const {name, age, country, city} = studentInfo;

// console.log(name);

// Spread Operator

const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers, 6, 7, 8, 9, 10];

// console.log(newNumbers);

const person = {
    name: "John",
    age: 25,
    city: "Toronto"
}

const newPerson = {
    ...person,
    country: "Canada"
}

// console.log(newPerson);

// Rest Operator

const printAll = (...args) => {
    args.forEach(arg => console.log(arg));
}

// printAll(1, 2, 3, 4, 5);

// filter()

const filter = (...args) => {
    return args.filter(kauya => kauya % 2 === 0);
}

// console.log(filter(13, 22, 8, 19, 24, 33));

// map()

const map = (...args) => {
    return args.map(data => data * 2);
}

console.log(map(1, 2, 3, 4, 5));

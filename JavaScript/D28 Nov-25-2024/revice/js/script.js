/* 
    localStorage.setItem('name', 'John Doe');
    localStorage.getItem('name');
    localStorage.removeItem('name'); 
*/

const students = [
    { name: 'John', grade: 5 },
    { name: 'Jane', grade: 6 },
    { name: 'Bob', grade: 4 },
    { name: 'Peter', grade: 3 },
    { name: 'Lucy', grade: 7 }
];

localStorage.setItem('students', JSON.stringify(students));
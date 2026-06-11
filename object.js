const student =[{
    name: "ritu raj",
    totalmarks : "45",
    age: "22",
    city: "mumbai",
    hobbies: ["reading", "traveling", "cooking"], 
},
{
    name: "ritu hraj",
    age: "12",
    totalmarks : "55", 
    city: "mumbai",
    hobbies: ["reading", "traveling"],
}
];
//console.log(student);
//console.log(student.age);
//console.log(student.hobbies[1]);

// map, filter, reduce, function of objects, destructuring, spread operator, rest operator, classes, inheritance, encapsulation, polymorphism, abstraction, modules, promises, async/await, error handling, callbacks, event loop, closures, hoisting, scope, this keyword, prototype chain, ES6 features (let, const, arrow functions, template literals), DOM manipulation, AJAX, JSON parsing/stringifying.

/*map
const arr=[2,3,4,5,6];

const doubledArr= arr.map((num)=>{
    return num*2;
});

console.log("Original Array:", arr);
console.log("Doubled Array:", doubledArr); */

const updateStudents = student.map(s =>
{
    const p=student.totalmarks/150*100;
    s.percentage=p;
    return s;
}
);

console.log(":",student);
console.log(":",updateStudents);

/* reduce
const sumofages=student.reduce((accumulator,currentvalue)=>
{
    return accumator + currentvalue.age;
    }.0);

console.log("sum of ages:",sumofages);

caluculate the average marks of all the student using reduce */

/* filter 
const studentabove85 = student.filter(student => student.totalmarks > 85);
const studentabove85 = student.filter(student => student.totalmarks/150*100 > 85);
console.log("student:", studentabove85);

*/


// add result status to each student object based on there percentage pass if above 60 otherwise fail

// find the average marks of students using average function

# Mern-Summer-term
const students =
[
    {
        name: "Ritu Raj",
        totalMarks: 85,
        age: 22,
        city: "Delhi",
        isGraduated: true,
        registrationNumber: 12345,
        hobbies: ["Reading", "Traveling", "Cooking"],
    },
    {
        name: "Mradul",
        age: 19,
        totalMarks: 90,
        city: "Delhi",
        isGraduated: true,
        registrationNumber: 5678,
        hobbies: ["Reading", "Traveling", "Cooking"],
    },
    {
        name: "Harsh",
        age: 20,
        totalMarks: 88,
        city: "Delhi",
        isGraduated: true,
        registrationNumber: 78910,
        hobbies: ["Reading", "Traveling", "Cooking"],
    },
    {
        name: "Anandi",
        age: 19,
        totalMarks: 92,
        city: "Delhi",
        isGraduated: true,
        registrationNumber: 7789,
        hobbies: ["Reading", "Traveling", "Cooking"],
    }
];

/* var newArray=[];
for(let i=0;i<students.length;i++){
    const p=students[i].totalMarks/150*100;
    newArray.push({
        name: students[i].name,
        totalMarks: students[i].totalMarks,
        age: students[i].age,
        city: students[i].city,
        isGraduated: students[i].isGraduated,
        registrationNumber: students[i].registrationNumber,
        hobbies: students[i].hobbies,
        percentage: p.toFixed(2) // Limiting percentage to 2 decimal places
    });
} */

//console.log("Students using for loop:", newArray);

const updatedStudents = students.map(s => {
        const p=s.totalMarks/150*100;
       // s.percentage=p.toFixed(2).toString()+"%"; // Limiting percentage to 2 decimal places and converting to string- It was updating original value as same reference was being used.
       return {
        ...s,
        percentage:p.toFixed(2).toString()+"%" 
       }
});

console.log("Original Students:", students);
console.log("Updated Students with Percentage:", updatedStudents);

// Reduce:
// Reduce function is used to reduce an array to a single value by applying a function to each element of the array. It takes a callback function and an optional initial value as arguments. The callback function takes two arguments: the accumulator (which accumulates the result) and the current value (the current element being processed). The reduce function iterates through the array, applying the callback function to each element and updating the accumulator until it has processed all elements. Finally, it returns the accumulated result.

    //console.log(students);

/* const arr=[2,3,4,5,6];

const doubledArr= arr.map(num => {
    return num*num;
});

console.log("Original Array:", arr);
console.log("Doubled Array:", doubledArr); */

// map, filter, reduce, function of objects, destructuring, spread operator, rest operator, classes, inheritance, encapsulation, polymorphism, abstraction, modules, promises, async/await, error handling, callbacks, event loop, closures, hoisting, scope, this keyword, prototype chain, ES6 features (let, const, arrow functions, template literals), DOM manipulation, AJAX, JSON parsing/stringifying.


const sumOfAges= students

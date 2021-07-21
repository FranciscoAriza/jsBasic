// Declarative function

function myFunction() {
    return 10;
}

myFunction();

//Expression function

var myFunction = function(a,b) {
    return a + b;
}

myFunction();

// This function print in console Hello + student

function helloStudents(student) {
    console.log('Hello',student);
}

helloStudents("Francisco");

function helloStudents(student) {
    console.log(`Hello ${student}`);
}

helloStudents("Francisco");

// Function to sum two numbers (a and b) and return the result.

function sum(a,b){
    var result = a + b;
    return result;
}

sum(5,6);

function sum(a,b){
    return a +b;
}

sum(10,9);
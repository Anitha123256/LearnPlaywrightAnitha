// Anonymous function
// function () {
//   console.log("This is an Anonymous function")  
// }

// // anonymous wih arrow
// () => console.log("This is a simple function")

//  callback function

// function greetM() {
//     console.log("Good Morning")
// }
// function greetA() {
//     console.log("Good Afternoon")
// }
// function greetE() {
//     console.log("Good Evening")
// }
// function greetN() {
//     console.log("Good Night")
// }
// function sayGreetings(callback){ // higher order function
//     console.log("Hey Hi")
//     callback() // callback function
// }
// sayGreetings(greetN)
// higher order function : it is a function which will have a callback functio
// ex: saygreetings
// callback function: function called as an argument/parameter inside another function is called as callback function
//Ex: greetN
// why we need this?
// to make our code a asynchronous

//Synchronous: Executing the code line by line sequentially
// by default js code is synchronous to make it Asynchronous we are using callback function

// Asynchronous:
console.log("Anitha")
setTimeout( function () {
    console.log("This is Anonymous function")
}, 5000)
console.log("Ammu")
//setTimeout(function, time)
// here we are using anonymous function as a calllback function


// closure function: is a callback function but when it is executing it will access the data from higher order function
 
function add(n1, n2){
    console.log(n1 + n2)
}
function displaymessage(n1){
    console.log("This is a simple callback " + n1)
}

function calculator(num1, num2, callback, callback2){
console.log(num1)
console.log(num2)
let x = 6
callback(x)
callback2(num1,num2)
 }
 calculator(4,7, displaymessage, add)
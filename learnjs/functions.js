function add() {
    console.log(5)
    console.log(7)
    console.log(5+7)
}

add()

function add1(num1,num2) {
    console.log(num1)
    console.log(num2)
    console.log(num1 + num2)
}

add1(10,20)

function add2(num3,num4) {
    return num3 + num4
}
 x = add2(9,8)
 console.log(x)

 function displaymessage(){
    console.log("This is a simple function")
    console.log("2nd statement in same function")
 }
 displaymessage()

 // Arrow function for single statement
 displaymessage1 = () => console.log("This is an arrow function")
 displaymessage1() 

 // Arrow function for multiple statements
 displaymessage2 = () => {
    console.log("This is an arrow function with multiple lines")
    console.log("2nd statement in a arrow function")
 }
 displaymessage2()


 function multiply(num5,num6){
    console.log(num5)
    console.log(num6)
    console.log(num5 * num6)
 }

multiply(9,8)
// arrow function for multiply...function keyword is not required
multiply1 = (num7,num8) => {
    console.log(num7)
    console.log(num8)
    console.log(num7 * num8)
} 
multiply1(5,4)

// return key word

// function add2(num3,num4) {
//     return num3 + num4
// }
//  x = add2(9,8)
//  console.log(x)

  
add7 = (num11, num12) => num11 + num12
result = add7(1,3)
console.log(result)

function displayname(str) {
    console.log("Hello " +str)
}
displayname("Anitha")

// arrow function
displayname1 = str1 => console.log("Hello " + str1)
displayname1("Eeranna")

// Arithmetic operators
console.log(3+4)
console.log(10-2)
console.log(3*6)
console.log(12/4)
console.log(4%3)
// increment and decrement
var a = 5
a++
console.log(a)
a--
console.log(a)
// **
console.log(2**3)

// textcontext
var firstName = "Anitha"
var lastName = "ammu"
console.log(firstName + "  " +  lastName)

x = 5
y = 10
console.log(x + y)
x1 = "5"
y1 = "10"
console.log(x1 + y1)
// post increment & pre increment
num1 = 34
num1++
console.log(num1)
++num1
console.log(num1)

// logical operators

// AND
// X Y Z
// 0 0 0
// 0 1 0
// 1 0 0
// 1 1 1
console.log(true && true)

console.log(true && false)

console.log(4>2 && 5>3)
// OR
// x y z
// 0 0 0
// 0 1 1
// 1 0 1
// 1 1 1
 console.log(true || false)
 // NOT
//  0 1
// 1 0
console.log(true)
console.log(!true) // false

// comparison operators it will return boolean value
console.log(4 == 4)
console.log(5 != 3)
console.log(6 > 3)
console.log(2< 7)
console.log(4 >= 4)
console.log(5 <= 2)

// == vs ===
//  coercion behaviour
console.log("4"+5)
console.log(4+ 5+ "3" +4+6)

console.log("4"-8)
console.log(4-"anu") // Nan not a number

x = "Ammu"
y = "Ammu"
console.log(x == y) // it compare only values but not data types
console.log(x === y) // will compare values and data types also


// Assignment operator
x = 45
x += 5
console.log(x) // x = x+5

z = 35
z -= 10
console.log(z)

z *= 2
console.log(z)

// ternary operator
var age = 20
var res = (age >= 18) ? "eligible to vote" : "not eligible to vote"
console.log(res)





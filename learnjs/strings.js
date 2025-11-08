str = "javascript"

// length
console.log(str.length)
console.log(str[0])
console.log(str[str.length-2])

// to join two strings
str1 = "anu"
str2 = "Ammu"
str3 = str1.concat(str2)
console.log(str3)

//touppercase
str4 = "This is a sample string"
str5 = str4.toUpperCase()
console.log(str5)

str6 = str4.toLowerCase()
console.log(str6)

// trim is used to remove spaces before and after the string
str7 = "   Hello World   "
console.log(str7.trim())

// trimstart() is used to remove spaces only from starting
str8 = "   Hello world   "
console.log(str8.trimStart())
// trimend() is used to remove spaces only from end
str9 = "   Hello World     "
console.log(str9.trimEnd())
// includes is used to check whether a substring is present in a string
str10 = "Hello Anitha"
console.log(str10.includes("Anitha"))
console.log(str10.includes("Ammu"))

// strings are immutable
str11 = "Hello"
//str11[0] = "h"      it will give an error

arr = ['a', 'b', 'c']
arr[2] = 'd'
console.log(arr)
// replace 
str15 =Number("$49.99".replace("$",""))
console.log(str15)

str16 = "This is simple sentence".replace("i", "k")
console.log(str16)
// replaceAll()
str17 = "This is simple is sentence".replaceAll("is", "was")
console.log(str17)

//\n is used to print in new line
str18 = "Hello Anitha\nWelcome to javascript"
console.log(str18)
// using tab space
str19 = 'Hello Anitha\tWelcome to javascript'
console.log(str19)
// substring
str20 = "Anitha"
sub1 = str20.substring(0,3)
console.log(sub1)

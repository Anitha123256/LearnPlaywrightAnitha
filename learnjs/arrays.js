arr = [] // empty array

arr1 = [1,2,3,4,5,6,7,8]

arr2 = ["anu", 45,undefined, null, true]

//.length
console.log(arr1.length )
console.log(arr1[5])

// how to get last second element
console.log(arr1[arr1.length-2])

// join two arrays
arr3 = arr1.concat(arr2)
console.log(arr3)

// .sort()
arr4 = [5,7,9,4,2,6,4]
arr5 = arr4.sort()
console.log(arr5)

arr6 = ["Ammu", 34, true, null , undefined].sort()
console.log(arr6)

// reverse()
arr7 = [3,8,9,4,6]
arr8 = arr7.reverse()
console.log(arr8)

// split is used to convert string to array
str1 = "Anitha"
arr9 = str1.split("")
console.log(arr9)

str2 = "Anitha is from bangalore"
arr11 = str2.split(" ")
console.log(arr11)
// split with delimeter
arr11 = str2.split(" i ")
console.log(arr11)
// join is used to convert array to string
arr12 = ["A", "n", "i", "t", "h", "a"]
str3 = arr12.join("")
console.log(str3)
arr13 = ['Anitha', 'is', 'from', 'Bangalore']
str4 = arr13.join("")
console.log(str4)
// reverse a string
str6 = "javascript"
revrstr = str6.split("").reverse().join("")
console.log(revrstr)

prices = [ '$29.99', '$9.99', '$15.99', '$49.99', '$7.99', '$15.99' ]
let sortedAsc = prices.slice().sort((a,b) =>  parseFloat(a.slice(1)) - parseFloat(b.slice(1)));

console.log("Ascending:" , sortedAsc);


// push()
  ar1 = ["Wakeup", "eat", "Sleep"]
ar1.push("Read")
ar1.unshift("Excercise")
    console.log(ar1)
    ar1.pop()
    console.log(ar1)
    ar1.shift()
    console.log(ar1)

ar2 = ["Anu", "Ammu", "Anitha"]
ar2[2] = "Kusu"
console.log(ar2)

//includes()

ar3 = ["Admin", "PIM", "Leave"]
console.log(ar3.includes("Anu"))
console.log(ar3.includes("PIM"))

// indexOf()
console.log(ar3.indexOf("Leave"))

// array.forEach( element => {
    // });

    jobtitles = ["SDET1", "Account Assistant", "Content writer"]
    jobtitles.forEach(element => {
        console.log("loop starts")
        console.log(element)
        console.log("loop ends")
    });

    // using for of loop
    for (let title of jobtitles){
        console.log("loop starts")
        console.log(title)
        console.log("loop ends")
    }
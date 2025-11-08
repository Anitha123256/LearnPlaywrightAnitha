// function add(num1, num2) {
//     console.log(num1+num2)
// }
// function sub(num3, num4){
//     console.log(num3-num4)
// }
// function mul(num5, num6){
//     console.log(num5*num6)
// }
// function div(num7, num8){
//     console.log(num7-num8)
// }
// add(4,8)


// class is a blueprint for creating objects
// class will have variables and methods
class Classname {
    studentname = "anitha"
    studentage = 24
}
// create object for class
let obj = new Classname()
console.log(obj.studentname)
console.log(obj.studentage)




class Calculator{
    stname = "Ammu"


    constructor(){
        console.log("Hi this is a simple method")
    }
 add(num1, num2) {
    console.log(num1+num2)
}
 sub(num3, num4){
    console.log(num3-num4)
}
 mul(num5, num6){
    console.log(num5*num6)
}
 div(num7, num8){
    console.log(num7-num8)
}

greetMessagr(num13,num14){
    console.log(" Hi " +  this.stname)
this.add(num13,num14)

}

anu(num11,num12){
    this.add(num11,num12)
    this.mul(num11,num12)
}




}
const calc = new Calculator()
calc.add(10,5)
calc.sub(10,5)
calc.mul(2,4)
calc.div(4,2)

// to create multiple objects
const calc1 = new Calculator()
calc1.add(8,9)
calc1.stname
console.log(calc1.stname)
calc.greetMessagr(5,9)

calc1.anu(5,8)
calc.greetMessagr(5,6)





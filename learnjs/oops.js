// class employee {


// static empname = "Ammu"
// empplace = "banglore"
// static m1(){
//     console.log("This is m1 static method")
// }
// m2(){
//     console.log("This is m2 method")
// }
// static m3(){
//     console.log("This is m3 method")
//     this.m1()
// }

// }
// const emp = new employee()
// emp.empname
// emp.empplace
// employee.m1()
// emp.m2()
// employee.m3()
// console.log(employee.empname)
// console.log(emp.empplace)

// // static proprties or methods are called directly by using class name
// // oops
// // encapsulation: Binding the data
// //Inheritance: 
// // polymorphysm:
// //1. Method overriding
// //2. Method overloading
// // Prototype:
// //1. Encapsulation
// //Example
// class student{
//     stname
//     stplace
//     stcourse

//     studentdetails(name, place, course) { //setter
//         this.stname = name
//         this.stplace = place
//         this.stcourse = course
//     }
// printstudentdetails() { //getter
//     console.log(this.stname)
//     console.log(this.stplace)
//     console.log(this.stcourse)
// }



// }
// const st1 = new student()
// st1.studentdetails("Anitha", "Banglore", "Playwright")
// st1.printstudentdetails()

// Inheritance
// class A{
    
//     m1(){
//         console.log("this is m1 method")
//     }
//     m2(){
//         console.log("This is m2 method")
//     }
// }
// class B extends A{
    
//     m3(){
//         console.log("this is m3 method")
//     }
//     m4(){
//         console.log("This is m4 method")
//     }
// }
// const obj = new B()
// obj.m2()
// obj.m4()

// multilevel inheritance
// class A{
    
//     m1(){
//         console.log("this is m1 method")
//     }
//     m2(){
//         console.log("This is m2 method")
//     }
// }
// class B extends A{
    
//     m3(){
//         console.log("this is m3 method")
//     }
//     m4(){
//         console.log("This is m4 method")
//     }
// }

// class C extends B{
    
//     m5(){
//         console.log("this is m5 method")
//     }
//     m6(){
//         console.log("This is m6 method")
//     }
// }
// const obj = new C()
// obj.m2()
// obj.m4()
// obj.m6()

// hyracticall
// class A{
    
//     m1(){
//         console.log("this is m1 method")
//     }
//     m2(){
//         console.log("This is m2 method")
//     }
// }
// class B extends A{
    
//     m3(){
//         console.log("this is m3 method")
//     }
//     m4(){
//         console.log("This is m4 method")
//     }
// }

// class C extends A{
    
//     m5(){
//         console.log("this is m5 method")
//     }
//     m6(){
//         console.log("This is m6 method")
//     }
// }
// const obj = new C()
// obj.m2()
// //obj.m4() // it gives an error because C ectends to A instead of B
// obj.m6()

// class A{
//     add(num1, num2){
//         console.log(num1)
//         console.log(num2)
//         console.log(num1 + num2)

//     }
//     displaymessage(){
//         console.log("This is parent class method")
//     }
// }
// class B{
//     add(num1, num2, num3){
//         console.log(num1)
//         console.log(num2)
//         console.log(num3)

//         console.log(num1 + num2 + num3)
        
//     }
//     displaymessage(){
//         console.log("This is child class method")
//     }
// }
// const obj1 = new A()
// // // obj1.displaymessage() // Method overriding// we need to obj for child class
// //  obj1.add(4,5,6)
// // obj1.add(4,5)

// // obj1.displaymessage() // 
// //  obj1.add(4,5,6) //method overloading it will ignore extra parameters//we need to create obj for parent class

// 4. prototyping
class A{
    stname = "Anitha"
    
    m1(){
        console.log("this is m1 method")
    }
    m2(){
        console.log("This is m2 method")
    }
}
A.prototype.stname2 = "Anu" // prototyped varaible
A.prototype.m3 = function(){ // prototyped method
    console.log("This is M3 method")
}
const ob1 = new A()
console.log(ob1.stname)
console.log(ob1.stname2)

ob1.m2()
ob1.m3()

const ob2 = new A()
console.log(ob2.stname)
console.log(ob2.stname2)

ob2.m2()
ob2.m3()

const ob3 = new A()
console.log(ob3.stname)
console.log(ob3.stname2)
ob3.m3()
ob3.m2()


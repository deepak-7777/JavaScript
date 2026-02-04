                                                  ////     Classes & Object

// const student = {
//     name: "Deepak",
//     marks: 92,
//     printMarks: function () {
//         console.log("Marks = ", this.marks);
//     }
// }
// console.log(student);
// console.log(student.marks);


// const employee = {                      // ham khud se prototype bana shakte 
//     calcTax() {
//         console.log("tax rate is 10%");
//     },
// };
// const karanArjun = {
//     salary: 50000,
// };
// const karanArjun2 = {
//     salary: 50000,
// };
// const karanArjun3 = {
//     salary: 50000,
// };
// const karanArjun4 = {
//     salary: 50000,
// };
// karanArjun.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;
// karanArjun4.__proto__ = employee;
// // Example usage
// karanArjun.calcTax();   // Output: tax rate is 10%
// karanArjun2.calcTax();  // Output: tax rate is 10%
// karanArjun3.calcTax();


// class ToyotaCar {
//     constructor() {                                       //  jitna baar kuch bhi print karayenge utna baar constructor call hoga 
//         console.log("Creating new object");
//     }
//     start() {
//         console.log("start");
//     }
//     stop() {
//         console.log("stop");
//     }
//     setBrand(brand) {
//         this.brand = brand;
//     }
// }
// let fortuner = new ToyotaCar();
// fortuner.setBrand("fortuner");
// let lexus = new ToyotaCar();
// lexus.setBrand("lexus");
// console.log(ToyotaCar);
// console.log(fortuner);


// class Parent {
//     hello() {
//         console.log("Deepak");
//     }
// }
// class Child extends Parent {

// }
// let obj = new Child();
// console.log(Parent);
// console.log(obj.hello());


// class Person {
//     constructor() {
//         this.species = "Homo sapiens";
//     }
//     eat() {
//         console.log("eat");
//     }
//     sleep() {
//         console.log("sleep");
//     }
//     work() {
//         console.log("do nothing");
//     }
// }
// class Engineer extends Person {
//     work() {
//         console.log("solve problems, build something");
//     }
// }
// class Doctor extends Person {
//     work() {
//         console.log("treat patients");
//     }
// }
// // Example usage:
// const john = new Engineer();
// john.eat();     // eat
// john.work();    // solve problems, build something

// const mary = new Doctor();
// mary.sleep();   // sleep
// mary.work();    // treat patients



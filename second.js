                                                          ////           OPERATORS   && CONDITIONAL STATEMENTS 
                                // Arithmetic Operator


//    {           // agar bracket laga ho to kitna bhi " let " ek sath liya ja shakta hai 
// let a = 5;
// let b = 2;
// console.log("a + b = ", a+b);
// console.log("a - b = ", a-b);
// console.log("a * b = ", a*b);
// console.log("a / b = ", a/b);
// console.log("a % b = ", a%b);   // modulus operators
// console.log("a ** b = ", a**b);  //       (5^2= 25)
//    }


                        //  Unary Operators 
// let a = 8;
// let b = 4;
// a++;
// b--;
// console.log("a = ", a);
// console.log("b = ", b);

// let a = 8;
// let b = 4;
// console.log("a++ = ", a++);
// console.log("a++ = ", a);

// let a = 8;
// let b = 4;
// console.log("a-- = ", a--);
// console.log("a-- = ", a);

// let a = 8;
// let b = 4;
// console.log("--a = ", --a);
// console.log("--a = ", a);

                                     // Assignment Operator
// let a = 8;
// let b = 4;
// a += 4;       //  (a = a + 4)
// console.log("a = ", a);

// let a = 8;
// let b = 4;
// a -= 4;
// console.log("a = ", a);

// let a = 8;
// let b = 4;
// a *= 4;
// console.log("a = ", a);

// let a = 8;
// let b = 4;
// a /= 4;
// console.log("a = ", a);

// let a = 8;
// let b = 4;
// a %= 4;
// console.log("a = ", a);

// let a = 8;
// let b = 4;
// a **= 4;
// console.log("a = ", a);

                                           //   Comparision Operators 
// let a = 8;
// let b = 4;
// console.log("a == b ", a == b);

// let a = 8;
// let b = 4;
// console.log("a != b ", a != b);

// let a = 4;  // number
// let b = "4";  // string
// console.log("a == b ", a == b);

// let a = 8;
// let b = "4";
// console.log("a === b ", a === b);

// let a = 8;
// let b = 4;
// console.log("a > b ", a > b);

// let a = 8;
// let b = 4;
// console.log("a >= b ", a >= b);

// let a = 8;
// let b = 4;
// console.log("a < b ", a < b);

// let a = 8;
// let b = 4;
// console.log("a <= b ", a <= b);

                                             // Logical Operators

// let a = 8;
// let b = 8;
// let cond1 = a > 4;  // true 
// let cond2 = a == b; // true 
// console.log("cond1 && cond2 = ", cond1 && cond2);     //  use logical AND

// let a = 8;
// let b = 8;
// let cond1 = a > 9;  // false 
// let cond2 = a == b; // true 
// console.log("cond1 && cond2 = ", cond1 && cond2);  

// let a = 8;
// let b = 8;
// let cond1 = a > 4;  // true 
// let cond2 = a == b; // true 
// console.log("cond1 || cond2 = ", cond1 || cond2);     //  use logical OR

// let a = 8;
// let b = 8;
// let cond1 = a > 9;  // false
// let cond2 = a == b; // true 
// console.log("cond1 || cond2 = ", cond1 || cond2);  


// let a = 8;
// let b = 8;
// let cond1 = a > 9;  // false
// let cond2 = a != b; // false
// console.log("cond1 || cond2 = ", cond1 || cond2);     

// let a = 8;
// let b = 8;
// let cond1 = a > 9;  // false
// console.log("!(cond1)= ", !(cond1));   // true return      //  use logical NOT

// let a = 8;
// let b = 8;
// let cond1 = a < 9;  // true
// console.log("!(cond1)= ", !(cond1));   // false return 



                                                        ///    Conditional Statements 

// let age = 16;              // use if Statement 
// if (age >= 18) {
//     console.log("You can drive");
// }
// if (age < 18) {
//     console.log("You can not drive");
// }

// let age = 20;              // use if-else Statement 
// if (age >= 18) {
//     console.log("You can drive");
// } else {
//     console.log("You can not drive");
// }

// let mode = "dark";          // use else-if Statement 
// let color;
// if(mode === "dark") {
//     color = "pink"
// } else if (mode === "blue") {
//     color = "green"
// } else {
//     color = "red"
// }
// console.log(color);



// let age = 22;                        //     Ternary Operators 
// let result = age > 18 ? "adult" : "Not adult";
// console.log(result);

// let age = 11;
// let result = age > 18 ? console.log("adult") : console.log("Not adult");





                                                 ///      Practice Questions 
// let num = prompt("enter a number");
// if (num % 5 == 0) {
//     console.log(num, "is a multiple of 5");
// } else {
//      console.log(num, "is not a multiple of 5");
// }


// let score = 92;
// let grade;
// if (score >= 90 && score <= 100) {
//     grade = "A";
// } else if (score >= 70 && score <= 89) {
//     grade = "B";
// } else if (score >= 60 && score <= 69) {
//     grade = "c";
// } else if (score >= 50 && score <= 59) {
//     grade = "D";
// } else if (score >= 0 && score <= 49) {
//     grade = "F";
// }
// console.log ("Grade = ",grade);


let score = prompt("enter your score(0-100)");
let grade;
if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 70 && score <= 89) {
    grade = "B";
} else if (score >= 60 && score <= 69) {
    grade = "c";
} else if (score >= 50 && score <= 59) {
    grade = "D";
} else if (score >= 0 && score <= 49) {
    grade = "F";
}
console.log ("Grade = ",grade);
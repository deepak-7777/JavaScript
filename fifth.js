                                                      //      FUNCTIONS   &&  its method  (MAP method)
// function myfunction () {
//     console.log("Deepak Kumar");
//     console.log("Deepak");
// }
// myfunction();

// function myfunction (msg) {   // parameter 
//     console.log(msg);
    
// }
// myfunction("Deepak Kumar");  // argument 

// function sum (a,b) {
//     console.log(a+b);
// }
// sum("Sum = ",2,5);

// function sum (a,b) {
//     let s = a + b;
//     return s;
// }
// let val = sum(2,5);
// console.log(val);

// const arrowfun = (a,b) => {    // arrow function
//     console.log(a + b);
// }
// arrowfun(4, 3);

// const arrowfun = (a,b) => {
//     console.log(a * b);
// }
// arrowfun(4, 3);

// let arrowfun = (a,b) => {
//     return a * b;
// }
// console.log(arrowfun(4, 3));


// function countVowels (str) {          // used in function 
//     let count = 0;
//     for (const char of str ) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     console.log("no of vowel = ",count);
// }
// countVowels ("deepak");


// let  countVowels = (str) => {         // used in arrow
//     let count = 0;
//     for (const char of str ) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     console.log("no of vowel = ",count);
// }
// countVowels ("deepak");


// let arr = [1,2,3,4,7];
// arr.forEach(function printval (val) {
//      console.log(val);
// });


// let nums = [1,2,3,4,7];              // find square 
// nums.forEach((num) => {
//      console.log("square = ",num * num);
// });


// let nums = [1,2,3,4,7];       // MAPS method
// nums.map((val) =>{
//      console.log(val);
// })


// let nums = [1,2,3,4,7];       
// let newArr = nums.map((val) =>{
//     return val;
// })
//  console.log(newArr);


// let nums = [1,2,3,4,7];          // Filter method     (find even num)
// let evenArr = nums.filter((val) =>{
//     return val % 2 === 0;
// })
//  console.log(evenArr);


// let nums = [1,2,3,4,7];          // Filter method     (find odd num)
// let evenArr = nums.filter((val) =>{
//     return val % 2 !== 0;
// })
//  console.log(evenArr);


// let nums = [1,2,3,4,7];          // Reduce method     
// let output = nums.reduce((result, current) => {
//     return result + current;
// })
//  console.log("Sum = ",output);


// let marks = [85, 97, 92, 76];               // Practice Question     
// let output = marks.filter((val) => {
//     return val > 90;
// })
//  console.log("Sum = ",output);


// let n = prompt("enter a number");
// let arr = [];
// for(let i = 1; i <= n; i++) {
//      arr[i - 1] = i;
// }
// console.log(arr);


// let n = prompt("enter a number");
// let arr = [];
// for(let i = 1; i <= n; i++) {
//      arr[i - 1] = i;
// }
// console.log(arr);
//  let output = arr.reduce((result, current) => {
//     return result + current;
//  })
// console.log("Sum = ",output);


// let n = prompt("enter a number");         /// factorial of n number 
// let arr = [];
// for(let i = 1; i <= n; i++) {
//      arr[i - 1] = i;
// }
// console.log(arr);
//  let factorial = arr.reduce((result, current) => {
//     return result * current;
//  })
// console.log("Factorial = ",factorial);
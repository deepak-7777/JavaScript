                                                                   ///          LOOPS  &&&  STRINGS
                                       /// Loops


// let num =Number(prompt("enter a number"));          // for loop
// for (let i = 1; i <=num; i++) {
//     console.log("Deepak");
// }

// let sum = 0;
// for(let i = 1; i <= 5; i++) {
//    sum = sum+i;
// }
// console.log ("Sum = ", sum);

// let num =Number(prompt("enter a number"));
// let sum = 0;
// for(let i = 1; i <= num; i++) {
//    sum = sum+i;
// }
// console.log ("Sum = ", sum);

// for(let i = 1; i <= 5; i++) {
//    console.log ("i = ", i);
// }

// for(let i = 1; i <= 5; i++) {
//    console.log ("i = ", i*2);
// }

// let i = 1;                                      /// while loop
// while(i <= 5) {
//     console.log ("i = ", i);
//     i++;
// }

// let i = 1;
// while(i <= 5) {
//     console.log ("Deepak");
//     i++;
// }

// let i = 1;
// while(i <= 10) {
//     console.log (i*5);
//     i++;
// }

// let i = 1;                                      /// do-while loop
// do {
// console.log ("Deepak");
// i++;
// } while (i <= 10);

// let i = 17;                                      
// do {
// console.log ("Deepak");
// i++;
// } while (i <= 10);

// let i = 1;                                     
// do {
// console.log (i);
// i++;
// } while (i <= 10);/

// let str = "Deepak Kumar";                           ////     for-of loop 
// for (let val of str) {
//     console.log (val);
// }

// let size = 0;
// let str = "Deepak Kumar";                          
// for (let val of str) {
//     console.log (val);
//     size++;
// }
// console.log("Size = ",size)

// let student = {                                    ////   for-in loop 
//     Name : "Deepak Kumar",
//     Rollno : 31218,
//     Sgpa : 9
// };
// for (let key in student) {
//     console.log(key,"=", student[key]);
// }


// for(let i=0; i<=100; i++) {              /// Practice Question 
//     if(i%2 == 0) {
//         console.log (i);
//     }
// }

// let gameNum = 25;
// let userNum = prompt("Guess the game number (0-100):")
// while(userNum != gameNum) {
//      userNum = prompt("you entered wrong number. Guess again");
// }
// console.log("Congrats you guess correct number");



                                                                   ///    String

// let str = "Deepak";
// let str1 = 'Deepak Kumar';
// console.log(str1);
// let size = str.length;
// console.log("Size = ", size);
// console.log(str1.length);

// let str = "Deepak";
// console.log(str[0], str[4]);


// let specialString = `This is a template literal`;          // template literals 
// console.log(specialString);

// let obj = {
//     item : "pen",
//     price : 10,
// };
// console.log(obj);
// console.log(obj.item);
// console.log(obj.price);


// console.log("Deepak\nKumar");
// console.log("Deepak\tKumar");


// let str = "deepak";                     ///  UpperCase
// let s = str.toUpperCase();
// console.log(s)

// let str = "DEEPAK";                     ///  LowerCase
// let s = str.toLowerCase();
// console.log(s)

// let str = "    Deepak   kumar     ";                     ///  trim     (first aur last space ko remove kar deja)
//  console.log(str.trim());

// let str = "0123456789";                          ///  slice    (last number are not count in slice)
//  console.log(str.slice(1, 6));

// let str1 = "Deepak";                      ///  concat  
// let str2 =  "Kumar";         
// let res = str1.concat(str2);               
//  console.log(res);

// let str1 = "Deepak";                     
// let str2 =  "Kumar";         
// let res = str1 + str2;               
//  console.log(res);

// let str = "Deepak";                      /// replace   
// let res = str.replace("D", "E");                
//  console.log(res);

// let str = "Deepak";                      ///CharAt
// let res = str.charAt(0);                
//  console.log(res);


let fullName = prompt("Enter your name without space");
let userName = "@" + fullName + fullName.length;
console.log(userName);
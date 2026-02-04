                                                     ////    Arrays
// let marks = [92,93,95,97,99];
// console.log(marks);
// console.log("Length = ", marks.length);
// console.log(typeof marks)            // object 
// marks[0] = 62;
// console.log(marks);


// let marks = [92,93,95,97,99];
// for(let i = 0; i< marks.length; i++) {
//     console.log(marks[i]);
// }


// let marks = [92,93,95,97,99];
// for(let el of  marks) {
//     console.log(el);
// }


//  let marks = [1, 2, 4, 6, 2];
//  let sum = 0;
//  for(let i = 0; i< marks.length; i++) {
//      sum = sum + marks[i];
//  }
// console.log("Sum = ",sum);
// let avg = sum / marks.length;
// console.log("Avg = ",avg);


// let items = [200, 300, 400, 500, 100];                     // 10% off all items
// for (let i = 0; i < items.length; i++) {
//     let offer = items[i] / 10;
//    items[i] = items[i]- offer ;
// }
// console.log(items);


// let food = ["litchi", "mango", "papaya"];       // push
// console.log(food);
// food.push= "onioin";
// console.log(food);
// food.pop();
// console.log(food);


// let food = ["litchi", "mango", "papaya"];      //pop
// console.log(food);
// food.pop();
// console.log(food);


// let food = ["litchi", "mango", "papaya"];       //toString
// food.toString();
// console.log(food);


// let food = ["litchi", "mango", "papaya"];       // Concat
// items = [200, 300, 400, 500, 100]; 
// let val =  food.concat(items);
// console.log(val);


// items = ["litchi", "mango", "papaya"];             // unshift
// console.log(items.unshift("20"));


// items = ["litchi", "mango", "papaya"];             // shift        (first wale ko delete karega )
// console.log("deleted",items.shift());
// console.log(items);


// items = ["litchi", "mango", "papaya"];             // slice      
// console.log(items.slice(0, 2));


items = ["litchi", "mango", "papaya", "litchi", "mango", "papaya"];             // splice      
console.log(items.splice(1, 2, 101));
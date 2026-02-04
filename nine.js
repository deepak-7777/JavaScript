                                                                      //  Synchronous  & Asynchronous  & Callbacks & Promises
                                                    //  Synchronous
// console.log("one");
// console.log("two");
// console.log("three");
// console.log("four");


                                                //   Asynchronous
// function hello () {
//     console.log("hello");
// }
// setTimeout(hello, 5000);    //  5s = 5000


// console.log("one");
// console.log("two");
// setTimeout(() => {
//     console.log("Deepak");
// }, 7000);
// console.log("three");
// console.log("four");


// function sum (a, b) {                          /// CallBack 
//     console.log(a + b);
// }
// function calculator (a, b, sumCallback) {
//     sumCallback(a, b);
// }
// calculator(1, 6, sum);


// function getData (dataId) {
// setTimeout (() => {
//     console.log("data: ", dataId);
// }, 2000);
// }
// getData(1);
// getData(2);
// getData(3);


// function getData (dataId, getNextData) {                           // callback hell (difficult prolem)
// setTimeout (() => {
//     console.log("data: ", dataId);
//     if (getNextData) {
//     getNextData();
//     }
// }, 2000);
// }
// getData(1, () => {                // nested callbacks
//     getData(2, () => {
//         getData(3, () => {
//             getData(4);
//         });
//     });
// });


// let Promises = new Promise ((resolve, reject) => {                      // promises
//     console.log("I promise you");
//     resolve("Sucess");
// })
// console.log(Promises);


// let Promises = new Promise ((resolve, reject) => {
//     console.log("I promise you");
//     reject("some error");
// })
// console.log(Promises);


// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 2000);
//     });
// }
// let promise = getData(123);
// console.log(promise)


// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             reject("error")
//         }, 5000); 
//     });
// }
// let promise = getData(123);
// console.log(promise)


// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         // Uncomment this to fulfill:
//         // resolve("success");
//         // Reject the promise:
//         reject("Network error");
//     });
// };
// let promise = getPromise();
// promise.then((value) => {
//         console.log("promise fulfilled with:", value);
//     })
// promise.catch((error) => {
//         console.log("rejected with:", error);
//     });


// function asyncFun() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("work");
//             resolve("success");
//         }, 4000);
//     });
// }
// console.log("Fetching data...");
// let p1 = asyncFun();
// p1.then((res) => {
//     console.log(res);
// });


// function asyncFun() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 4000);
//     });
// }
// function asyncFun2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 4000);
//     });
// }
// console.log("Fetching data1...");
// let p1 = asyncFun();
// p1.then((res) => {
//     console.log(res);
// });
// console.log("Fetching data2...");
// let p2 = asyncFun2();
// p2.then((res) => {
//     console.log(res);
// });



// function asyncFun() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 4000);
//     });
// }
// function asyncFun2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 4000);
//     });
// }
// console.log("Fetching data1...");
// let p1 = asyncFun();
// p1.then((res) => {
//     console.log(res);
//   console.log("Fetching data2...");  
//   let p2 = asyncFun2();
// p2.then((res) => {
//     console.log(res);
// });
// });


// function getData(dataId, getnextData) {                         /// Promise Chain 
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("Sucess");
//             if (getnextData) {
//                 getnextData();
//             }
//         }, 5000); 
//     });
// }
// let p1 = getData(1);                                             ///  yaha pe Promise Chain ka use ho raha hai 
// p1.then ((res) => {
//     console.log(res);
// });


// function getData(dataId) {                        
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("Sucess");
//         }, 3000); 
//     });
// }                                             
// getData(1).then ((res) => {
//     console.log(res);
//     getData(1).then (() => {
//     console.log(res);
// });
// });


// async function hello() {                          ///     Async - Await
//     console.log("Deepak");
// }
// console.log(hello());


// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("data are loaded");
//         }, 2000);
//     });
// }
// // async function
// async function showData() {
//     console.log("data loading...");
//     try {
//         const result = await getData();
//         console.log(result);
        
//         console.log("the rest of the code");
//     } catch (error) {
//         console.log("Error:", error);
//     } 
// }
// // function call
// showData();


// Async - await example
async function getData(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Data ${id} received`);
            resolve();
        }, 1000);
    });
}
async function getAllData() {
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);

    console.log("getting data4....");
    await getData(4);

    console.log("getting data5....");
    await getData(5);
}
getAllData();

import { rejects } from "assert";
import { promises } from "dns";
import { resolve } from "path";

// const p = new Promise((resolve, rejects) => {
//     let x = 3;
//     if(x == 5){
//         resolve("success, x is 5");
//     } else{
//         rejects("failure, x is not 5");
//     }
// });
// //console.log(p);
// p.then((message) => console.log(message)); // to handle success
// p.catch((message) => console.log(message)); // to handle failure
// p.finally(() => console.log("this is final block")); // it will be executed always 
// 2nd way to create promise
// const p = Promise.resolve("Anu");
// console.log(p);

// 3rd way to create promise
//  const p = "Anitha"
//  console.log(p)

 // promise will have 3 stages:
 // 1. pending: initial state
 // 2. fulfilled: completed successfully
 // 3. rejected: the operation failed

 // promises methods:
//  const p1 = Promise.resolve("promised resolved successfully");
//  //const p2 = Promise.reject("rejjected");
//  const p3 = 100;
//  const p4 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, "promise 4 resolved after 2 seconds");
//  });
//  const p5 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "promise 5 resolved after 1 seconds");
//  });
 
//  Promise.all([p1,p2,p3,p4]).then((values) => console.log(values));
//  Promise.race([p4,p5].then((value) => console.log(value))); // one result that is resolved
//  Promise.allSettled([p1, p2,p3,p4].then((values) => console.log(values)));
 //Promise.any ([p1,p4,p5]).then((values) => console.log(values));// fail r success 

 // Async: will return promise
 // Await: will wait for the promise to resolve
//   async function myFunction(){
//     async function myFunction() {
//         const myPromise = new Promise((resolve, reject) => {
//             setTimeout(() => resolve("async await example"), 3000);
//         });
//         async function myFunction() {
//             const myPromise = new Promise((resolve) => {
//                 setTimeout(() => resolve("async await example"), 3000);
//             });
//             const result = await myPromise;
//             console.log(result);
//         }

//         myFunction();
//         console.log(result);
//     }
// }
//     myFunction();
  
// Simple async/await examples for beginners

// Helper that returns a promise that resolves after `ms` milliseconds
function delayReturn(ms, value, shouldReject = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldReject) reject(new Error('Something went wrong'));
            else resolve(value);
        }, ms);
    });
}

// Example 1: sequential awaits (one after another)
async function sequentialExample() {
    try {
        console.log('Starting sequential example...');
        const first = await delayReturn(1000, 1);           // waits 1s
        const second = await delayReturn(1000, first + 1);  // waits another 1s
        console.log('Sequential result:', second);          // 2
    } catch (err) {
        console.error('Sequential error:', err.message);
    }
}

// Example 2: parallel awaits with Promise.all (both run at the same time)
async function parallelExample() {
    try {
        console.log('Starting parallel example...');
        const results = await Promise.all([
            delayReturn(1000, 'A'),
            delayReturn(1000, 'B')
        ]); // ~1s total instead of ~2s
        console.log('Parallel results:', results); // ['A','B']
    } catch (err) {
        console.error('Parallel error:', err.message);
    }
}

// Example 3: error handling with try/catch/finally
async function errorExample() {
    try {
        console.log('Starting error example...');
        await delayReturn(500, null, true); // will reject
        console.log('This line will not run if the above rejects');
    } catch (err) {
        console.error('Caught error:', err.message);
    } finally {
        console.log('Finally block runs regardless of success or failure');
    }
}

// Run examples
sequentialExample()
    .then(() => parallelExample())
    .then(() => errorExample());
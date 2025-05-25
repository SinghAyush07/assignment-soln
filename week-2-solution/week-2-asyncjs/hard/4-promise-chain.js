/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((resolve)=>{
        setTimeout(resolve,t);
    })
}

function wait2(t) {
    return new Promise(resolve=>{
        setTimeout(resolve,t);
    })
}

function wait3(t) {
    return new Promise(resolve =>{
        setTimeout(resolve,t);
    })
}

function calculateTime(t1, t2, t3) {
    let start = Date.now();
    return new Promise((resolve)=>{
        wait1(t1).then(()=>{
            return wait2(t2);
        })
        .then(()=>{
            return wait3(t3);
        })
        .then(()=>{
            end = Date.now();
            resolve(end -start);
        })
    })
}

calculateTime(1000,2000,3000).then((time)=>{
    console.log(`Time taken to resolve is ${time/1000} seconds.`);
})

// Here the promises are chained to be executed one after another
// i.e the first the wait1 promise will have to resolve then wait2 promise will resolve then wait3
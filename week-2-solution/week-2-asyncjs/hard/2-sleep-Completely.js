/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise((resolve)=>{
        let start = Date.now();
        while(Date.now() - start <= milliseconds){         // halting the thread
        }
        resolve();
    });
}
// note: using async await will not work as the await only stops the thread in async function
// rest of the program outside the async function runs instead of waiting 

function callback(){
    console.log('Thread is free now');
}

sleep(4000).then(callback);
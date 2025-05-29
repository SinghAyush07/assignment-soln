// reading from a file and verifying the async functionally of readFile function.

const fs = require('fs');

fs.readFile('a.txt','utf-8',(err,content)=> {
    if(err)
        console.log(err);
    else
        console.log(content);
});

let count = 1;

// expensive operation : the thread continues to operate the following operation while the content of file
// is waiting to be printed as the thread is not free
for(let i=1;i<100000000000;i++){
    count*=i;
}


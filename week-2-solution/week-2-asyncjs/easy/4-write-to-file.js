const fs = require('fs');

fs.writeFile('a.txt', 'writing something to the file',(err)=>{
    if(err)
        console.log(err);
});


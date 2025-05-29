// Counter using SetTimeOut

let count = 0;

function countin(){
    count++;
    console.log(count);
    setTimeout(countin,1000);       //calling function upon every one second
}

countin();
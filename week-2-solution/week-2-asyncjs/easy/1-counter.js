// Counter using SetInterval


function main() {
    let count = 0;
    setInterval(()=>{
        count++;
        console.log(count)
    }, 1000);
}

main();
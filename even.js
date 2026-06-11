const r = require('readline');

const rl = r.createInterface({
    input: process.stdin,
    output:process.stdout,
});


rl.question("enter a number",(n)=>{
    if(n/2==0){
        console.log(`${n} is Even number`);
    }else{
        console.log(`${n} is Odd number`);
    }
    rl.close();
});

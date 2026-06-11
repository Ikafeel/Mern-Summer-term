const r= require('readline');

const rl = r.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter First Number: ', (a) => {
    rl.question('Enter Second Number: ', (b) => {
       const sum= Number(a) + Number(b);
       console.log(`The sum of ${a} and ${b} is ${sum}`);
       rl.close();
    });
});


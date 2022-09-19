const prompt = require('prompt-sync')({sigint: true});

let enterPin = String(prompt("Pick a 4 digit pin "))

let pinCode = `1234`;

if(enterPin !== `1234`){
console.log(`Access Denied`)
}else {
    console.log(`Access Granted`);
}
const prompt = require('prompt-sync')({sigint: true});

let user1Choice = String(prompt('Player1 choose either rock, paper or sissors: ')); 
let user2Choice = String(prompt('Player2 choose either rock, paper or sissors: '));

if(user1Choice === `rock` && user2Choice === `paper`){
    console.log(`Player2 wins`);
} else if(user1Choice === `rock` && user2Choice === `sissors`){
    console.log(`Player1 wins`);
} else if(user1Choice === `paper` && user2Choice === `rock`){
    console.log(`Player1 wins`);
} else if(user1Choice === `paper` && user2Choice === `sissors`){
    console.log(`Player2 wins`);
} else if(user1Choice === `sissors` && user2Choice === `rock`){
    console.log(`Player2 wins`);
} else if(user1Choice === `sissors` && user2Choice === `paper`){
    console.log(`Player1 wins`);
} else if(user1Choice === `rock` && user2Choice === `rock` ){
    console.log(`Draw`)
} else if(user1Choice === `paper` && user2Choice === `paper` ){
    console.log(`Draw`)
} else if(user1Choice === `sissors` && user2Choice === `sissors` ){
    console.log(`Draw`)
} else {
    console.log(`Failure`)
}
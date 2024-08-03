// guess number game
// function to generate random number
function randint(min , max){
    min = Math.ceil(min); // round up to nearest integer
    max = Math.floor(max); // round down to nearest integer
    return Math.floor(Math.random() * (max-min +1 )) ;
    // Math.random gives random float between 0-1
}
console.log("Guess The Number Game...");
let com_num = randint(0, 20);
let usr_num = prompt("Enter guessed number : ");
while( com_num != usr_num){
    if(usr_num > com_num){
        usr_num = prompt("Wrong guess ... Enter smaller number : ");
    }
    if(usr_num < com_num){
        usr_num = prompt("Wrong guess ... Enter greater number : ");
    }
}
console.log("Corret guess !! The number is "+com_num);

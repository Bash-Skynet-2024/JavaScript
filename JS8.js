// num divisibility by 2 and 3
let num = prompt("enter number : ");
for(let i = 2 ; i < 10; ++i){
    if ( num % i == 0){
        alert("\n"+num+" is divisible by "+i);
    }
}

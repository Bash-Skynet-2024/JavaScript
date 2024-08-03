// num divisibility by 2-9 / print seperate for all div
let num = prompt("enter number : ");
for(let i = 2 ; i < 10; ++i){
    if ( num % i == 0){
        alert("\n"+num+" is divisible by "+i);
    }
}
// modifications : print all div at same time
// num divisibility by 2 and 3
let num = prompt("enter number : ");
let arr = [];
let b = 0;
for(let i = 2 ; i < 10; ++i){
    if ( num % i == 0){
        arr[b]= i;
        ++b;
    }
}
alert("\n"+num+" is divisible by : "+ arr);

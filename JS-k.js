// create array and take input from user and add elements 
let arr = [];
let n = prompt("enter size of array");
let ele;
for(let i=0;i<n;i++){
    ele = parseInt(prompt("enter element : "));
    arr.push(ele); //arr[i] = ele ;
}
console.log(arr);
